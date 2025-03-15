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
    unoptimized: true,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  webpack: (config, { dev, isServer }) => {
    // Only run this in production build and not during development
    if (!dev && !isServer) {
      // Import the plugin only when needed
      const MiniCssExtractPlugin = require("mini-css-extract-plugin")

      // Add the plugin to the webpack config
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[name].[contenthash].css",
          chunkFilename: "static/css/[id].[contenthash].css",
        }),
      )
    }

    return config
  },
}

module.exports = nextConfig

