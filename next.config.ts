import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aceternity.com',
                port: '',
                pathname: '/images/products/thumbnails/new/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
