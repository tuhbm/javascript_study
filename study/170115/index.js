var http = require('http');

var server = http.createServer(function(req,res){
    res.end('<h1 style="color:red">hello wolrd</h1>');
})

server.listen('8888');
//브라우져 실행해서 loacalhost:8888