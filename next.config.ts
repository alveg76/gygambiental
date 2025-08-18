// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // AÑADIMOS ESTE BLOQUE PARA LAS IMÁGENES
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;