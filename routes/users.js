var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
    controller.registeruser(req, res, next);

});

router.post('/login', function(req, res, next) {

    controller.loginUser(req, res, next);
});



router.post('/forgotpassword', function(req, res, next) {

    controller.forgotpassword(req, res, next);
});



module.exports = router;