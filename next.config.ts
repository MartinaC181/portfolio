/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Permite imágenes de Unsplash
      },
      // Si usas fotos de tu LinkedIn o GitHub, agrega sus dominios aquí
    ],
  },
};

export default nextConfig;