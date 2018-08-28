var path = require('path');
module.exports = function (express,app,config,apiRouter) {
  require('./routes/get')(app, config, apiRouter); // get文件里面需要写内容，否则报错require("")不是一个function
  require('./routes/post')(app, config, apiRouter);
  require('./routes/put')(app, config, apiRouter);
  require('./routes/delete')(app, config, apiRouter);

  /* app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   next();
   });*/

  app.all('/',function (req,res,next) {
    //   console.log('■req.originalUrl■', req.originalUrl)
  });


}
