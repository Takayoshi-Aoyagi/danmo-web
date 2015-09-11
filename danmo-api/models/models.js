var mongoose = require('mongoose');

var Models = {};

mongoose.connect('mongodb://localhost/danmo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('// yay!');
});

var scheduleSchema = mongoose.Schema({
    date: Date,
    name: String,
    desc: String,
    charge: Number
});

Models.Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Models;
