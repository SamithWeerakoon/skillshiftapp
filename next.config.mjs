if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
if (!globalThis.Request) {
    globalThis.Request = Request;
}
if (!globalThis.Response) {
    globalThis.Response = Response;
}
if (!globalThis.Headers) {
    globalThis.Headers = Headers;
}


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    publicRuntimeConfig: {
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
        NEXT_PUBLIC_FEATURE_FLAG: process.env.NEXT_PUBLIC_FEATURE_FLAG || 'true',
    },

    serverRuntimeConfig: {
        SECRET_KEY: process.env.SECRET_KEY,
        DATABASE_URL: process.env.DATABASE_URL,
    },

    swcMinify: true,
    output: 'standalone',
};

export default nextConfig;
