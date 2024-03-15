/** @type {import('next').NextConfig} */
export default {
    experimental: {
            serverActions: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
            {
                protocol: "https",
                hostname: "cms.layer1.foundation",
            },
        ],
    },
};
