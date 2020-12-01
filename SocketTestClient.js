const io = require('socket.io-client');
const socket = io.connect('http://10.10.0.102:8081', {reconnect: true});


var x = 0;
    console.log('sending message')
    msg = 15;
	socket.emit('value', msg);
	

socket.on('value', function(msg){
           
    console.log(msg);
           
});
        
socket.on('connect', function(data) {
        console.log("Connected...");
        socket.on("message", function(data){
            console.log(data);
        });
    });