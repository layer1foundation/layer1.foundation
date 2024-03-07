"use server";

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
};

export interface IBlog {
    id: number;
    attributes: IBlogPostAttributes;
}

type IEndpointTypes = 'blogs' | 'sop' | 'governance-resolution';

export async function fetchCMS(endpoint: IEndpointTypes): Promise<IBlog[] | IBlog> {
    try {
        const res = await fetch(
            `${EXTERNAL_LINKS.strapi}/api/${endpoint}?populate=*`
        );
        const { data } = await res.json();
        console.log("Strapi CMS Data:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch CMS:", error);
        return [];
    }
}
