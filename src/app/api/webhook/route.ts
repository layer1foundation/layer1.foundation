import { NextRequest, NextResponse } from 'next/server';
import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

interface ImgbbResponse {
    data: {
        id: string;
        title: string;
        url_viewer: string;
        url: string;
        // Add other fields as necessary
    };
    success: boolean;
    status_code: number;
}
interface ImageUploadResponse {
    data: {
        url: string;
    };
}
const strapiBaseUrl = process.env.STRAPI_SERVER_URL;

export async function POST(req: NextRequest, res: NextResponse) {
    console.log('WEBHOOK:request received')


    const data = await req.json(); // Get the data from the webhook payload
    console.log('DATA', data)
    if (data.event !== 'entry.create'){
        return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
    }
    // console.log('WEBHOOK:entry', entry)
    if (!data) {
        console.timeLog('no data from strapi webhook')
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const coverUrl = `${strapiBaseUrl}${data.entry.cover.url}`;
    const thumbnailUrl = `${strapiBaseUrl}${data.entry.thumbnail.url}`;
    const avatarUrl = `${strapiBaseUrl}${data.entry.author_avatar.url}`;

    const fetchImageBuffer = async (url: string, retries = 10) => {
        while (retries > 0) {
            try {
                const response = await fetch(url, {
                    headers: {
                        'Accept': 'image/*',
                        // Optionally adjust or remove the Cache-Control header
                        'Cache-Control': 'no-cache',
                    }
                });
                console.log(`Fetching image from URL: ${url}`);
                console.log(`Response Status: ${response.status}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch image: ${response.statusText}`);
                }
                const arrayBuffer = await response.arrayBuffer();
                return Buffer.from(arrayBuffer);
            } catch (err) {
                console.error(`Attempt ${10 - retries} failed for URL: ${url}. Error: ${err}`);
                retries -= 1;
                if (retries === 0) throw err; // Rethrow error if all retries fail
                // Optional: Implement exponential backoff or a fixed delay before retrying
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
            }
        }
    };

    try {
        const [coverBuffer, thumbnailBuffer, avatarBuffer] = await Promise.all([
            fetchImageBuffer(coverUrl).catch(err => {
                console.error(`Error fetching cover image: ${err.message}`);
                return null;
            }),
            fetchImageBuffer(thumbnailUrl).catch(err => {
                console.error(`Error fetching thumbnail image: ${err.message}`);
                return null;
            }),
            fetchImageBuffer(avatarUrl).catch(err => {
                console.error(`Error fetching avatar image: ${err.message}`);
                return null;
            })
        ]);
        if (!coverBuffer || !thumbnailBuffer || !avatarBuffer) {
            throw new Error('One or more images could not be fetched.');
        }

        console.log('WEBHOOK:imageBuffer', coverBuffer);
        console.log('WEBHOOK:imageBuffer', thumbnailBuffer);
        console.log('WEBHOOK:imageBuffer', avatarBuffer);

        const coverExtension = getFileExtension(data.entry.cover.name);
        console.log('WEBHOOK:coverExtension', coverExtension)
        const coverData = new FormData();
        coverData.append('image', coverBuffer, `${data.entry.cover.name}.${coverExtension}`);

        const thumbnailExtension = getFileExtension(data.entry.thumbnail.name);
        console.log('WEBHOOK:thumbnailExtension', thumbnailExtension)
        const thumbnailData = new FormData();
        thumbnailData.append('image', thumbnailBuffer, `${data.entry.thumbnail.name}.${thumbnailExtension}`);

        const avatarExtension = getFileExtension(data.entry.author_avatar.name);
        console.log('WEBHOOK:avatarExtension', avatarExtension)
        const avatarData = new FormData();
        avatarData.append('image', avatarBuffer, `${data.entry.author_avatar.name}.${avatarExtension}`);

        console.log('WEBHOOK:coverData', coverData)
        console.log('WEBHOOK:thumbnailData', thumbnailData)
        console.log('WEBHOOK:avatarData', avatarData)

        const uploadImage = async (data: any) => {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
                method: 'POST',
                body: data,
                headers: data.getHeaders(),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`Failed to upload image to imgbb: ${response.statusText}, ${errorResponse}`);
            }

            return response.json() as Promise<ImageUploadResponse>;
        };

        const [coverJson, thumbnailJson, avatarJson] = await Promise.all([
            uploadImage(coverData),
            uploadImage(thumbnailData),
            uploadImage(avatarData)
        ]);

        console.log('WEBHOOK:coverJson', coverJson)
        console.log('WEBHOOK:thumbnailJson', thumbnailJson)
        console.log('WEBHOOK:avatarJson', avatarJson)

        const coverUpdate = coverJson?.data?.url ?? coverUrl;
        const thumbnailUpdate = thumbnailJson?.data?.url ?? thumbnailUrl;
        const avatarUpdate = avatarJson?.data?.url ?? avatarUrl;
        console.log(coverUpdate)
        console.log(thumbnailUpdate)
        console.log(avatarUpdate)

        const success = await updateStrapiEntry(data, coverUpdate, thumbnailUpdate, avatarUpdate)
            .catch(error => console.error('Error updating entry:', error));

        return NextResponse.json({ success: true });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

function getFileExtension(filename: string) {
    return filename.split('.').pop();
}

const updateStrapiEntry = async (data: any, newCoverUrl: string, newThumbnailUrl: string, newAvatarUrl: string) => {
    console.log('WEBHOOK:entry', data)
    console.log('WEBHOOK:newCoverUrl', newCoverUrl)
    console.log('WEBHOOK:newThumbnailUrl', newThumbnailUrl)
    console.log('WEBHOOK:newAvatarUrl', newAvatarUrl)
    const updateData = {
        ...data.entry,
    };
    updateData.cover_url = newCoverUrl;
    updateData.thumbnail_url = newThumbnailUrl;
    updateData.author_avatar_url = newAvatarUrl;
    
    console.log('WEBHOOK:updateData', updateData)
      try {
        const response = await fetch(`${strapiBaseUrl}/api/blogs/${data.entry.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,  // Ensure you have the correct token
          },
          body: JSON.stringify({ data: updateData }),
        });
    
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(`Failed to update Strapi entry: ${response.statusText}, ${JSON.stringify(errorResponse)}`);
        }
    
        const updatedEntry = await response.json();
        console.log('Updated Strapi Entry:', updatedEntry);
      } catch (error) {
        console.error('Error updating entry:', error);
      }
    };
    