/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mjml"],
    },
    reactStrictMode: true,
};

export default nextConfig;

