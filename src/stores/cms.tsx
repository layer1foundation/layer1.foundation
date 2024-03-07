'use client';

import { fetchCMS } from '@/actions/fetch-cms';
import { type IBlog } from '@/actions/fetchBlogs';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// Types
type ICmsContext = {
  governance: IBlog | null;
  resolution: IBlog | null;
  blogPosts: IBlog[] | never[];
  loading: boolean;
  error: boolean;
};

// Default State
const defaultState: ICmsContext = {
  governance: null,
  resolution: null,
  blogPosts: [],
  loading: false,
  error: false,
};

// Context
const CmsContext = createContext(defaultState);

// Provider
export function CmsProvider(props: { children: ReactNode }) {
  const [cms, setCms] = useState(defaultState);

  useEffect(() => {
    (async () => {
      const strapi = await Promise.all([
        fetchCMS('blogs'),
        fetchCMS('sop'),
        fetchCMS('governance-resolution'),
      ]);
      setCms({
        ...cms,
        blogPosts: strapi[0] as IBlog[],
        governance: strapi[1] as IBlog,
        resolution: strapi[2] as IBlog,
        loading: false,
      });
    })().catch(e => {
      console.error(e);
      setCms({ ...cms, error: true });
    })
  }, []);

  return (
    <CmsContext.Provider value={cms}>
      {props.children}
    </CmsContext.Provider>
  );
}

// Hook
export const useCMS = () => useContext(CmsContext);
