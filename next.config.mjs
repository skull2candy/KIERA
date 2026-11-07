/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning instead of build fail on Vercel deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ensure builds complete even if minor type warnings exist
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
