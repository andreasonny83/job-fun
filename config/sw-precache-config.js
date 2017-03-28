module.exports = {
  staticFileGlobs: [
    'dist/**.css',
    'dist/**.html',
    'dist/**.js',
    'dist/assets/**/*'
  ],
  stripPrefix: 'dist/',
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};
