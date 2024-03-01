import { Metadata } from 'next';

const title = "Layer 1 Foundation";
const description = "Layer 1 Foundation is a non-profit organization supporting the development of the BRC20 token standard and other metaprotocols built on Bitcoin and Ordinals.";

export const sharedMetadata: Metadata = {
  metadataBase: new URL('https://staging.l1f.xyz/'),
  title,
  description,
  applicationName: title,
  authors: [{ name: title }],
  openGraph: {
    title,
    description,
    images: [
      {
        url: 'opengraph-image.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    site: '@L1Fxyz',
    title,
    description,
    images: [{ url: 'opengraph-image.jpg' }],
  },
  keywords: ['bitcoin', 'btc', 'layer 1 foundation', 'ordinals', 'brc20'],
};
