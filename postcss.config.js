module.exports = {
    plugins: {
      'tailwindcss': {},
      'autoprefixer': {},
      'postcss-import': {},
      'postcss-preset-env': {
        stage: 3,
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'media-query-ranges': true,
        },
      },
      ...(process.env.NODE_ENV === 'production'
        ? {
            'cssnano': {
              preset: [
                'default',
                {
                  discardComments: {
                    removeAll: true,
                  },
                  normalizeWhitespace: false,
                  cssDeclarationSorter: true,
                  calc: false,
                  colormin: true,
                  convertValues: true,
                  discardDuplicates: true,
                  discardEmpty: true,
                  mergeRules: true,
                  minifyFontValues: true,
                  minifyGradients: true,
                  minifyParams: true,
                  minifySelectors: true,
                  normalizeCharset: true,
                  normalizeDisplayValues: true,
                  normalizePositions: true,
                  normalizeRepeatStyle: true,
                  normalizeString: true,
                  normalizeTimingFunctions: true,
                  normalizeUnicode: true,
                  normalizeUrl: true,
                  orderedValues: true,
                  reduceInitial: true,
                  reduceTransforms: true,
                  uniqueSelectors: true,
                  zindex: false,
                },
              ],
            },
          }
        : {}),
    },
  }