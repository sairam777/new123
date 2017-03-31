var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://sairam:sairam@ds137100.mlab.com:37100/register');
var bcrypt = require('bcryptjs')

var userregisterSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    contact: Number,
    dob: Date,

});

var user = mongoose.model("register", userregisterSchema);
module.exports = user;