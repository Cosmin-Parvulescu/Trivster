var realtime = function(http) {
    var io = require('socket.io')(http);

    io.on('connection', function(socket) {
        console.log('A user connected');
    });
};

module.exports = realtime;