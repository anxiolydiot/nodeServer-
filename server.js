var http = require("http");


var PORT = 7000;
var PORTbad = 7500;
var bad = ['u suck','go away'];
var good = ['ur nice','stay here'];
var anyGood = [Math.floor(Math.random()* anygood.length)];
var anyBad = [Math.floor(Math.random()* anybad.length)];

var goodRequest = function(res, req){
  //res.write('u r nice');
  res.write(anygood + req.url);

var badRequest = function(res, req){
  
  res.write(anybad + req.url);

var goodServer = http.createServer(handleRequestGood);
var badServer = http.createServer(handleRequestBad);

  server.listen(PORT, function(){
    console.log('listening at http://localhost:%s', PORT);

  })
};

server.listen()


// var PORT = 8080;
  

// var handleRequest = function(req, res){
//   //res.write()
//     res.end('hit:' + req.url);


// var server = http.createServer(handleRequest);

// server.listen(PORT, function(){
//   console.log('listening at http://localhost:%s', PORT);

// });