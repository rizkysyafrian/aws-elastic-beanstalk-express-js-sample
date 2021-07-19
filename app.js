// const express = require('express');
// const app = express();
// const port = 8080;

// app.get('/', (req, res) => res.send("Hello World!"));

// //res.write("Hello World! 2");

// app.listen(port);

//const Centrifuge = require('centrifuge');
//const WebSocket = require('ws');

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

console.log("Test Repo App running on http://localhost:");
