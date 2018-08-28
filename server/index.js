//后台入口文件

var express = require('express');
let app = express();
const apiRouter = express.Router();
const config = require('./config');
require('./databaseConnect')(config);
require('./setup')(app,config);
require('./router')(express,app,config,apiRouter);

/*app.all('*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
 res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
 next();
 });*/
app.listen(3000,function(){
  console.log('app listening on port 3000')
});
