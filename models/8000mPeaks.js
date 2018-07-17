const mongoose = require('mongoose');

const peakSchema = mongoose.Schema({
	name: String,
	height: String,
	location: String,
	firstAscent: String,
});


module.exports = mongoose.model('Peaks', peakSchema);



