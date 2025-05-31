/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'blob.v0.dev', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Next.js 15.3 optimizations
  serverExternalPackages: ['@nodelib/fs.scandir'],
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'react-icons'],
    optimizeImages: true,
    optimizeVideos: true
  },
};

export default nextConfig;
