module.exports = function (router, path) {
  // API ROUTER
  require('./api-routes.js')(router);
  // HTML ROUTER
  require('./html-routes.js')(router, path);
}
