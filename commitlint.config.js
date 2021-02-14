const StyleDictionaryPackage = require('style-dictionary');

const StyleDictionary = StyleDictionaryPackage.extend({
  source: [
    `${__dirname}/properties/**/*.json`,
    './style-dictionary.json',
  ],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './src/utils/theme/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

StyleDictionary.buildPlatform('js');
