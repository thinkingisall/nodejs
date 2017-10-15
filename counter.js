var http = require('http');

var userCount = 0;
var Ansible = require('node-ansible');
var command = new Ansible.AdHoc().module('shell').hosts('local').args("echo 'hello'");

http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;
	
    var process = command.exec();

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.write('for testing'+process);
    response.end();
}).listen(8080);

console.log('Server started');

