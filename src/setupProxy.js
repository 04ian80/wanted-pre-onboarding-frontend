const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/auth/*', {
      target: 'https://www.pre-onboarding-selection-task.shop',
      changeOrigin: true,
    })
  );
  app.use(
    proxy('/todos', {
      target: 'https://www.pre-onboarding-selection-task.shop',
      changeOrigin: true,
    })
  );
};
