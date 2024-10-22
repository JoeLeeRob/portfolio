/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
console.log('Hello!!!!!!!!', isProd)

const nextConfig = {
    basePath: isProd ? '/portfolio' : '',
    images: {
        loader: 'default',
        path: isProd ? '/portfolio/' : '/'
    }
};

export default nextConfig;
