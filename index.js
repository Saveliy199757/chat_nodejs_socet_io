const http = require('http');
const express = require('express');
const hostname = 'localhost';
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = require('socket.io');
const iok = io.listen(server);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];
iok.sockets.on('connection', function (socket) {
    console.log("Красавчик, давай в том же ритме");
    connections.push(socket);
    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Не уходииии");
    });
    socket.on('send mess', function (data) {
       iok.sockets.emit('add mess', {msg: data.mess, name: data.name, className: data.className });
    });
});

