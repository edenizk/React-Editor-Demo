const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@blocks': 'src/blocks',
    '@static': 'src/static',
    '@traits': 'src/traits',
    '@styles': 'src/styles',
    '@providers': 'src/providers',
    '@pages': 'src/pages',
    '@scripts': 'src/scripts',
    '@components': 'src/components',
    '@hooks': 'src/hooks',
  })(config);

  return config;
};
