/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // Only use basePath if deploying to a subdirectory (not root domain)
  ...(process.env.GITHUB_PAGES_SUBDIRECTORY && {
    assetPrefix: `/${process.env.GITHUB_PAGES_SUBDIRECTORY}`,
    basePath: `/${process.env.GITHUB_PAGES_SUBDIRECTORY}`,
  })
};

export default nextConfig;
