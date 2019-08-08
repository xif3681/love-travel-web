const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // app.use(proxy('/api', { target: 'http://127.0.0.1:7001/' }));
  app.use(proxy('/api', { 
    target: 'http://127.0.0.1:7001',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/api": "/"
    },
   }));
   app.use(proxy('/order', { 
    target: 'http://118.89.18.229:10008',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/order": "/"
    },
   }));
};