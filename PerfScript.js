const maxApi = require('max-api');
const io = require('socket.io-client');
const socket = io('http://h.s2.cloud.shaneth.com:8081');

maxApi.addHandler("echo", (msg) => {
	socket.emit('value', msg);
	maxApi.post("transmited", msg);
});

socket.on('value', function(msg){
           
         //  WHATEVER MAX NEEDS FROM THE SERVER for the listener, will come in as variable 'msg'
        var x=parseFloat(msg);
		maxApi.post("received", x);
		maxApi.outlet(x);
});
