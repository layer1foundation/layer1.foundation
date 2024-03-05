"use server"

type IBlogImgAttributes = {
    alternativeText: string | null;
    caption: string | null;
    createdAt: Date;
    ext: '.jpeg' | '.png' | '.svg' | '.jpg';
    formats: {
        
    };
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: string | null;
    provider: string | null;
    provider_metadata: null;
    size: number;
    updatedAt: Date;
    url: string;
    width: number;
}

type IBlogImgProps = {
    data: {
        id: number;
        attributes: IBlogImgAttributes;
    }
}

export interface IBlog {
    id: number;
    attributes: {
        content: string;
        cover: IBlogImgProps;
        createdAt: Date;
        description: string;
        publishedAt: Date;
        thumbnail: IBlogImgProps;
        title: string;
        updatedAt: Date;
    };
}

export async function fetchBlogs(): Promise<IBlog[]> {
    try {
        const res = await fetch("https://cms.l1f.xyz/api/blogs?populate=*");
        const { data } = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return [];
    }
}
