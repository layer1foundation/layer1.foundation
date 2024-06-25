/** @type {import('next').NextConfig} */
export default {
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
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
            },
            
        ],
    },
};
