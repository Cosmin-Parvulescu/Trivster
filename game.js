var Room = require('./room').Room;
var QuestionSource = require('./questionSource').QuestionSource;
var Trivster = require('./trivster').Trivster;

var Game = exports.Game = function() {
    this.rooms = [];
    this.questionSource = new QuestionSource();
};

Game.prototype.findRoom = function(roomName) {
    return this.rooms.find(function(r) {
        return r.name === roomName;
    });
};

Game.prototype.addPlayer = function(player, roomName) {
    var self = this;
    var room = this.findRoom(roomName);

    if(!room) {
        room = new Room();
        room.setName(roomName);

        self.rooms.push(room);
    }

    this.findRoom(roomName).addPlayer(player);
};

Game.prototype.removePlayer = function(playerId, roomName) {
    var room = this.rooms.find(function(r) {
        return r.name === roomName;
    });

    room.removePlayer(playerId);
};