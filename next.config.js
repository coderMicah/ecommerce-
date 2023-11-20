/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['cdn.sanity.io'],
    //   },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
          },
        ],
      },
}

module.exports = nextConfig
