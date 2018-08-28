module.exports = function (app, config, apiRouter) {
  var news = require('../controllers/get/user');
  app.get("/api/user/list", news.getList);
  app.get("/api/user/list/:id", news.userDetails);


}
