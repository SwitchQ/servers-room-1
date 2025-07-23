/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure trailing slash
  trailingSlash: true,

  // Configure asset prefix for deployment
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",

  // Configure webpack for better performance
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add support for Hebrew fonts and RTL
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/fonts/",
          outputPath: "static/fonts/",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
