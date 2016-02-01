var Trivster = exports.Trivster = function(questionSource, hintTickCb) {
    this._questionSource = questionSource;
    this._hintTickCb = hintTickCb;

    this._currentRound = 0;
    this._currentRoundTick = 0;
    this._ticksPerRound = 4;

    this._timer = null;
    this._currentQuestion = null;
};

Trivster.prototype._handleRoundEnd = function() {
    clearInterval(this._timer);

    this._handleRoundStart();
};

Trivster.prototype._handleRoundStart = function() {
    this._currentRoundTick = 0;
    this._currentQuestion = this._questionSource.getRandomQuestion();

    var self = this;
    this._timer = setInterval(function() {
        if(self._currentRoundTick == self._ticksPerRound) {
            self._handleRoundEnd();

            return;
        }
        var hint = self._questionSource.getHint(self._currentQuestion.id, self._currentRoundTick);

        self._hintTickCb(hint);
        self._currentRoundTick = (self._currentRoundTick + 1) % (self._ticksPerRound + 1);
    }, 1000);
};

Trivster.prototype.startGame = function() {
    this._handleRoundStart();
};
