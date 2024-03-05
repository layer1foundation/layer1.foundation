/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.otf$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "static/fonts/",
                        publicPath: "/_next/static/fonts/",
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
