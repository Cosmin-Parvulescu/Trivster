var express = require('express');
var router = express.Router();
var apiRouter = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'List'});
});

apiRouter.get('/', function(req, res) {
    res.json({ message: 'List of games' })
});

module.exports = {
    router: router,
    apiRouter: apiRouter
};