/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Public runtime configuration (available to both client and server)
    publicRuntimeConfig: {
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
      NEXT_PUBLIC_FEATURE_FLAG: process.env.NEXT_PUBLIC_FEATURE_FLAG || 'true',
    },
  
    // Server runtime configuration (only available on the server)
    serverRuntimeConfig: {
      SECRET_KEY: process.env.SECRET_KEY,
      DATABASE_URL: process.env.DATABASE_URL,
    },
  
    // SWC minification for faster builds in production
    swcMinify: true,
  
    // Standalone output for optimized Docker deployment
    output: 'standalone',
  };
  
  export default nextConfig;
  