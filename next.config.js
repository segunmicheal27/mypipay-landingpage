const withOptimizedImages = require("next-optimized-images");
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    amp: {
      skipValidation: true
    }
  }
}
module.exports = withOptimizedImages({
  experimental: {
    amp: {
      skipValidation: true
    }
  }
  /* config for next-optimized-images */
  // your config for other plugins or the general next.js here...
});
