const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');
const atImport = require('postcss-import');

module.exports = {
  plugins: [
    atImport({
      plugins: [stylelint()],
    }),
    postcssPresetEnv({
      stage: 1,
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
