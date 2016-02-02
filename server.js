var http = require("http");

var PORT = 7000;
var PORTbad = 7500;
var bad = ['u suck','go away'];
var good = ['ur nice','stay here'];
var anyGood = [Math.floor(Math.random()* good.length)];
var anyBad = [Math.floor(Math.random()* bad.length)];

var goodRequest = function(res, req){
  //res.write('u r nice');
  res.write(anyGood + req.url);
}

var badRequest = function(res, req){
  
  res.write(anyBad + req.url);
}

var goodServer = http.createServer(goodRequest);
var badServer = http.createServer(badRequest);

  goodServer.listen(PORT, function(){
    console.log('listening at http://localhost:%s', PORT);

  })
  badServer.listen(PORTbad, function (){
    console.log('listening at http://localhost:%s', PORTbad)
  });