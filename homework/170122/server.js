var http = require('http');
var data = require('./data.json');

var server = http.createServer(function(request, response){
    response.end(JSON.stringify(data[request.url.substr(1)]));
});

server.listen(3000, function(){
    console.log('서버가 실행되었습니다');
});