//Shane Patterson
//2020

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);
var port = 3000;

httpServer.listen(port, function(){
  console.log('listening on *:' + port);
});

io.on("connection", (socket) => {
   io.emit("hello", "world");
});

io.on('connection', function(socket){
  socket.on('value', function(msg){
      io.emit('value', msg);
      console.log(msg);
  });
});


/* client side

socket.on('value', function(msg){
           
         //  WHATEVER MAX NEEDS
           
        });

        */