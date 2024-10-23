
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig ={
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

// const nextConfig = {
//     basePath: isProd ? '/portfolio' : '',
//     images: {
//         loader: 'default',
//         path: isProd ? '/portfolio/' : '/'
//     }
// };

const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })

export default withMDX(nextConfig);
