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
    cover?: IBlogImgProps;
    createdAt: Date;
    description?: string;
    publishedAt?: Date;
    thumbnail?: IBlogImgProps;
    title: string;
    updatedAt?: Date;
    author?: any;
    readTime?: string;
    author_avatar?: any;
};

export interface IBlog {
    id: number;
    attributes: IBlogPostAttributes;
}

const fetchPostIdBySlug = async (slug: string) => {
    const response = await fetch(
        `https://cms.layer1.foundation/api/blogs?populate=*`
    );
    const { data } = await response.json();
    const post = data.find((post: IBlog) => {
        const findSlug = post.attributes.title
            .toLowerCase()
            .split(" ")
            .join("-");

        if (findSlug === slug) {
            return post;
        }
    });

    return post ? post.id : null;
};

const fetchPost = async (slug: string) => {
    const id = await fetchPostIdBySlug(slug);
    const response = await fetch(
        `https://cms.layer1.foundation/api/blogs?filters[id]=${id}&populate=*`
    );
    const { data } = await response.json();
    return data[0];
};

export default fetchPost;
