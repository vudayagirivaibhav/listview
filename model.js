let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let labelSchema = new Schema({
	Labels: {
		type: String
	},
});

module.exports = mongoose.model('labels', labelSchema);