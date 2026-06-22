/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000', // Substitua pelo domínio real da sua URL
        port: '',
        pathname: '/**', // Permite qualquer caminho dentro deste domínio
      },
    ],
  },
};

export default nextConfig;
