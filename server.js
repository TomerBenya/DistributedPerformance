//Shane Patterson, mostly
//2020

var app = require('express')();
var http = require('http').createServer(app);

const io = require("socket.io")(http);
var port = 8081;

http.listen(port, function(){
  console.log('listening on *:' + port);
});

io.on("connection", (socket) => {
  // io.emit("hello", "world"); for testing
});

io.on('connection', function(socket){
  socket.on('value', function(msg){
     socket.broadcast.emit('value', msg);

      console.log(msg);
  });
});
io.on('connection', socket => {
  console.log('Some client connected')
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
