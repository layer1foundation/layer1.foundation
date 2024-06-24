export async function fetchImageFromImgBB(image_id: string): Promise<string> {
    const endpoint = `https://api.imgbb.com/1/images/${image_id}?key=${process.env.IMGBB_API_KEY}`;
    try {
        const response = await fetch(endpoint,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log('IMG BB DATA', data)
        if (data.status === 200 && data.data.length > 0) {
            // Assuming the API returns a list of images and we're interested in the first one
            return data.data[0].url; // Return the URL of the first image
        } else {
            console.log('No images found or ImgBB API error');
            return ''
        }
    } catch (error) {
        console.error("Error fetching image from ImgBB:", error);
        throw error; // Rethrow or handle as needed
    }
}

const domo = fetchImageFromImgBB('T4RF31n')
console.log(domo)