/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
     reactStrictMode: true,

     async rewrites() {
          return [
               {
                    source: `/api/:path*`,
                    destination: `/api/:path*`,
               },
               {
                    source: `/:path*`,
                    destination: `${PLATFORM_URL}/:path*`,
               },
          ];
     },
};

module.exports = nextConfig;
