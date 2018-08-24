var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var get = require('routes/get');
var post = require('routes/post');
var put = require('routes/put');
var del= require('routes/delete');

var controllers = require('controllers');
var app = express()

//解决跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

/*// 访问静态资源
app.use(express.static(path.join(__dirname,'../dist')));
// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});*/


app.use("/getList",function(req,res){
  var obj = {
    code:0,
    list:[
      {name:"apple"},
      {name:"banana"}
    ]
  };
  res.jsonp(obj)
});

app.use('/',(req,res) => {
  res.send('hello express!')
});
app.listen(2000,() => {
  console.log('app listening on port 2000.')
});

