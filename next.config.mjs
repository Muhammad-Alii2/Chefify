/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',  // Add this for YouTube images
          pathname: '/vi/**',  // This pattern covers all YouTube thumbnail paths
        },
      ],
    },
  };
  
  export default nextConfig;
  