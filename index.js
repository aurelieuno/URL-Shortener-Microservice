/****Request Header Parser Microservice****
User Story: I can get the IP address, language and operating system for my browser.
https://cryptic-ridge-9197.herokuapp.com/api/whoami/
{"ipaddress":"162.250.64.10","language":"en-US","software":"Windows NT 6.1; WOW64"}**/


var express        =         require("express");
var app            =         express();
var path = require("path");
var useragent = require('express-useragent');

app.use(useragent.express());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));
app.use(require('stylus').middleware(__dirname));

//This is how to specify path in a typical Express.js app when the
//folder is 'templates'
app.set('views', path.join(__dirname, 'templates'))
//what template engine to use
app.set('view engine', 'pug')


  app.get('/', function(req, res){
      res.sendFile(path.join(__dirname+'/index.html'));
         });


    app.get('/click-me', function(req, res){
      res.send({"os" : req.useragent.os,
      	//"baseURL" : req.baseURL,
      	//"hostname" : req.hostname,
      	"ipaddress" : req.ip,
      	//"originalURL" : req.originalURL,
      	//"path" : req.path,
      	//"route" : req.route,
      	"language" : req.acceptsLanguages()[0]})
         });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});






