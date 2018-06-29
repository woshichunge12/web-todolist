var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s",host,port)
 
})

app.use(express.static('public'));

app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})
app.get('/exp444.html', function (req, res) {
   res.sendFile( __dirname + "/" + "exp444.html" );
})
app.get('/regist.html', function (req, res) {
   res.sendFile( __dirname + "/" + "regist.html" );
})
