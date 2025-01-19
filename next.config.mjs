/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.pexels.com",
            "cdn.sanity.io", // Add this line to allow images from Sanity
        ],
    },
};

export default nextConfig;
