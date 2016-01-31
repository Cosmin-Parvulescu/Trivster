var realtime = function(http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket) {
        socket.on('join', function(room) {
            socket.join(room, function(err) {
                if(err) {
                    socket.emit('error', err);
                }
            });
            socket.room = room;

            var joinMessage = socket.client.id + ' joined the room';

            socket.emit('update', { message: joinMessage });
            socket.broadcast.to(room).emit('update', { message: joinMessage });
        });

        socket.on('disconnect', function() {
            socket.leave(socket.room);
            socket.broadcast.to(socket.room).emit('update', { message: socket.client.id + ' left the room' });
        });
    });
};

module.exports = realtime;