var QuestionSource = exports.QuestionSource = function () {
    this._questions = [{
        id: 1,
        question: 'Din cati metri cubi de muschi e alcatuit Hogea?',
        answer: 'Din toti.'
    }, {
        id: 2,
        question: 'Cat de Boss este Rad?',
        answer: 'Foarte'
    }];
};

QuestionSource.prototype.getRandomQuestion = function() {
    return this._questions[Math.floor(Math.random()*this._questions.length)];
};

QuestionSource.prototype.getHint = function(questionId) {
    var question = this._questions.filter(function(_q) { return _q.id == questionId })[0];
    var hint = '';

    for(var i = 0; i < question.answer.length; i++) {
        var ladyLuck = Math.floor((Math.random() * 3) + 1);
        if(ladyLuck == 1 || question.answer[i] == ' ') {
            hint += question.answer[i];
        } else {
            hint += '*';
        }
    }

    return hint;
};