const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://wl7ptze5.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;