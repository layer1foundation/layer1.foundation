"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import fetchPost from "@/actions/fetch-blog";

type IPostContext = {
    loading: boolean;
    post: any | null;
};

const defaultState: IPostContext = {
    loading: true,
    post: null,
};

const BlogPostContext = createContext(defaultState);

export function BlogPostProvider(props: { children: ReactNode; slug: string }) {
    const [state, setState] = useState(defaultState);
    useEffect(() => {
        (async () => {
            const strapi = await fetchPost(props.slug);
            setState({ loading: false, post: strapi });
        })().catch(e => {
            console.error(e);
            setState({ loading: true, post: null });
        });
    }, []);

    return (
        <BlogPostContext.Provider value={state}>
            {props.children}
        </BlogPostContext.Provider>
    );
}

export const useBlogPost = () => useContext(BlogPostContext);
