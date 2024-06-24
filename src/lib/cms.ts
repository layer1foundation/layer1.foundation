import { EXTERNAL_LINKS } from "@/constants/links";

type IBlogImgAttributes = {
    alternativeText: string | null;
    caption: string | null;
    createdAt: Date;
    ext: ".jpeg" | ".png" | ".svg" | ".jpg";
    formats: Record<
        "large" | "medium" | "small" | "thumbnail",
        {
            ext: string;
            hash: string;
            height: number;
            mime: string;
            name: string;
            path: null;
            size: number;
            url: string;
            width: number;
        }
    >;
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
};

type IBlogImgProps = {
    data: {
        id: number;
        attributes: IBlogImgAttributes;
    };
};

export type IBlogPostAttributes = {
    content: string;
    cover: IBlogImgProps;
    createdAt: Date;
    description: string;
    publishedAt: Date;
    thumbnail: IBlogImgProps;
    title: string;
    updatedAt: Date;
    author_avatar: IBlogImgProps;
    author: string;
};

export interface IBlog {
    id: number;
    attributes: IBlogPostAttributes;
}

type IEndpointTypes = "blogs" | "sop" | "governance-resolution";

export async function fetchCMS(
    endpoint: IEndpointTypes
): Promise<IBlog[] | IBlog> {
    try {
        const res = await fetch(
            `${process.env.STRAPI_SERVER_URL}/api/${endpoint}?populate=*`
        );
        const { data } = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch CMS:", error);
        return [];
    }
}

export const fetchPostIdBySlug = async (slug: string) => {
    try{
    const response = await fetch(
        `${process.env.STRAPI_SERVER_URL}/api/blogs?populate=*`
    );
    const { data } = await response.json();
    const post = data.find((post: IBlog) => {
        const findSlug = post.attributes.title
            .toLowerCase()
            .split(" ")
            .join("-").replace(/:/g, "%3A");
        if (findSlug === slug) {
            return post;
        }
    });
    return post ? post.id : null;
    } catch (error) {
        console.log("Failed to fetch post by slug:", error);
    }

    
};

const fetchImagesImgbb = async (image: string) => {
    
}

export const fetchPost = async (slug: string) => {
    const id = await fetchPostIdBySlug(slug);
    const response = await fetch(
        `https://cms.layer1.foundation/api/blogs?filters[id]=${id}&populate=*`
    );
    const { data } = await response.json();
    return data[0];
};
