var express = require("express");

var app = express();
var server = app.listen(https://patchbae.github.io/PixelServer/public/);

app.use(express.static('public'));

console.log("My socket server is running.");


var socket = require('socket.io');

var io = socket(server);

var start = Date.now();

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('new connection: ' + socket.id);

function timer() {
	var delta = Date.now() - start; // milliseconds elapsed since start
    socket.broadcast.emit('milli', delta);
    console.log(delta);
}

setInterval(timer, 50);
}
