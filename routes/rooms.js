var express = require('express');

var router = express.Router();
var apiRouter = express.Router();

router.get('/:room', function (req, res) {
    res.render('room', { room: req.params.room });
});

apiRouter.get('/', function(req, res) {
    res.json({ message: 'List of games' })
});

module.exports = {
    router: router,
    apiRouter: apiRouter
};