/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Ajoutez les domaines autorisés ici
    domains: ['cdn.vox-cdn.com', 'techcrunch.com', 'media.zenfs.com'],
  },
};

module.exports = nextConfig;