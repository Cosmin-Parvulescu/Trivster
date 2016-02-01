var defaultCfg = {
    ticksPerRound: 4,
    secondsPerTick: 10
};

var Trivster = exports.Trivster = function(questionSource, questionTickCb, hintTickCb) {
    this._questionSource = questionSource;
    this._questionTickCb = questionTickCb;
    this._hintTickCb = hintTickCb;

    this._currentRound = 0;
    this._currentRoundTick = 0;

    this._ticksPerRound = defaultCfg.ticksPerRound;
    this._secondsPerTick = defaultCfg.secondsPerTick;

    this._timer = null;
    this._currentQuestion = null;
};

Trivster.prototype._handleRoundEnd = function() {
    clearInterval(this._timer);

    this._handleRoundStart();
};

Trivster.prototype._handleRoundStart = function() {
    this._currentRound++;
    this._currentRoundTick = 0;

    this._currentQuestion = this._questionSource.getRandomQuestion();
    this._questionTickCb(this._currentQuestion);

    var self = this;
    this._timer = setInterval(function() {
        if(self._currentRoundTick == self._ticksPerRound) {
            self._handleRoundEnd();

            return;
        }
        var hint = self._questionSource.getHint(self._currentQuestion.id, self._currentRoundTick);

        self._hintTickCb(hint);
        self._currentRoundTick = (self._currentRoundTick + 1) % (self._ticksPerRound + 1);
    }, this._secondsPerTick * 1000);
};

Trivster.prototype.startGame = function() {
    this._handleRoundStart();
};