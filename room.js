var Room = exports.Room = function() {
    this.name = "Random";
    this.players = [];
};

Room.prototype.setName = function(name) {
    this.name = name;
};

Room.prototype.addPlayer = function(player) {
    console.log('Added player ' + player.id + ' to room ' + this.name);

    this.players.push(player);
};

Room.prototype.removePlayer = function(playerId) {
    var player = this.players.find(function(p) {
        return p.id === playerId;
    });

    this.players = this.players.filter(function(p) {
        return p.id !== playerId;
    });

    console.log('Removed player ' + player.id + ' from room ' + this.name);
};