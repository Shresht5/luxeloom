/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',   // accept all https hosts
            },
            {
                protocol: 'http',
                hostname: '**',   // accept all http hosts
            },
        ],
    },
};

export default nextConfig;
