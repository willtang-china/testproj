var http = require('http');

http.createServer(function (request, response) {

    // ���� HTTP ͷ�� 
    // HTTP ״ֵ̬: 200 : OK
    // ��������: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // ������Ӧ���� "Hello World,will"
    response.end('Hello World,The date is 2019-11-21 19:10,hi will\n');
}).listen(80);

// �ն˴�ӡ������Ϣ
console.log('Server running at http://127.0.0.1:80/');