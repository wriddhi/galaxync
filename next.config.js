/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // https://lh3.googleusercontent.com/
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**/*',
            }
        ]
    }
}

module.exports = nextConfig
