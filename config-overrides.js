const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@blocks': 'src/blocks',
    '@traits': 'src/traits',
    '@styles': 'src/styles',
    '@providers': 'src/providers',
    '@pages': 'src/pages',
    '@scripts': 'src/scripts',
    '@components': 'src/components',
  })(config);

  return config;
};
