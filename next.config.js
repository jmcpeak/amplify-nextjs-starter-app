const isProd = process.env.NODE_ENV === 'production';

const redirects = [];

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        emotion: true,
    },
    experimental: {
        reactCompiler: isProd,
    },
    reactStrictMode: true,
    redirects: async () => redirects
};

module.exports = nextConfig;
