var http = require('http');
var data = require('./data.json')

var server = http.createServer(function(request, response){
    // console.log(request.url);
    // response.end(JSON.stringify(data));
    // if(request.url === '/fruits'){
    //     response.end(JSON.stringify(data.fruits));
    // }
    // if(request.url === '/numbers'){
    //     response.end(JSON.stringify(data.numbers));
    // }
    // if(request.url === '/stringNumbers'){
    //     response.end(JSON.stringify(data.stringNumbers));
    // }

    //변수에 할당되는 값이 중요하다
    //자바스크립트 해석기는 .을 만나면 앞에것을 객체로 인식한다.
    //실제 자바스크립트 해석기는 new 객체로 인식 후 실행 그후 다시 변환한다.
    response.end(JSON.stringify(data.[request.url.substr(1)]));
})
server.listen(3000, function(){
    console.log('서버가 실행되었습니다');
})
