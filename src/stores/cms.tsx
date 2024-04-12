"use client";

import { fetchCMS, type IBlog } from "@/lib/cms";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

// Types
type ICmsContext = {
    governance: IBlog | null;
    resolution: IBlog | null;
    blogPosts: IBlog[] | never[];
    loading: boolean;
    error: boolean;
    post: any;
};

// Default State
const defaultState: ICmsContext = {
    governance: null,
    resolution: null,
    blogPosts: [],
    loading: true,
    error: false,
    post: null,
};

// Context
const CmsContext = createContext(defaultState);

// Provider
export function CmsProvider(props: { children: ReactNode }) {
    const [cms, setCms] = useState(defaultState);

    useEffect(() => {
        (async () => {
            const strapi = await Promise.all([
                fetchCMS("blogs"),
                // fetchCMS('sop'),
                // fetchCMS('governance-resolution'),
            ]);
            setCms({
                ...cms,
                blogPosts: (strapi[0] as IBlog[]).sort(
                    (a, b) =>
                        new Date(b.attributes.createdAt).valueOf() -
                        new Date(a.attributes.createdAt).valueOf()
                ),
                // governance: strapi[1] as IBlog,
                // resolution: strapi[2] as IBlog,
                loading: false,
            });
        })().catch(e => {
            console.error(e);
            setCms({ ...cms, error: true });
        });
    }, []);

    return (
        <CmsContext.Provider value={cms}>{props.children}</CmsContext.Provider>
    );
}

// Hook
export const useCMS = () => useContext(CmsContext);
