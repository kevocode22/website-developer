/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
