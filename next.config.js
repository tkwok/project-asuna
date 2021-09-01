const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
  eslint: {
    dirs: ['pages']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
  }
});
