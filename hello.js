var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World,will"
    response.end('Hello World,The date is 2019-11-21 19:46,hi louis hihihi\n');
}).listen(80);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:80/');
