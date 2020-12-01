const maxApi = require('max-api');
const io = require('socket.io-client');
const socket = io('http://h.s2.cloud.shaneth.com');


var x = 0;

maxApi.addHandler('bang', () => {
		x=Math.random();
		maxApi.outlet(x);
		
});
maxApi.addHandler("echo", (msg) => {
	socket.emit('value', msg);
	maxApi.post(msg);
});

socket.on('value', function(msg){
           
         //  WHATEVER MAX NEEDS
           
        });