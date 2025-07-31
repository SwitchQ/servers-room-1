/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditional output based on environment
  // For development and API routes, use default
  // For production static export, use "export"
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,

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

  // Environment variables for the API
  env: {
    ALLCHAT_API_TOKEN: process.env.ALLCHAT_API_TOKEN,
    ALLCHAT_API_URL: process.env.ALLCHAT_API_URL,
  },
};

module.exports = nextConfig;
