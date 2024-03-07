'use client';

import React from 'react';
import { CmsProvider } from '@/stores/cms';

type IProviderProps = {
  children: React.ReactNode;
};

/* retchedOnWindowFocus was causing windows to refetch data every time a tab was switch back to, but it caused ugly rerenders on the client, so I've disabled it for now */
//if it breaks other parts of the app we can try and disable ui animations as workaround but that kind of defeats the point of having them in the first palce
function Providers({ children }: IProviderProps) {
  return (
      <CmsProvider>{children}</CmsProvider>
  );
}

export default Providers;
