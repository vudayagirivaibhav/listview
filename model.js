let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// Schema for the mongodb database.
let labelSchema = new Schema({
	Labels: {
		type: String
	},
});

module.exports = mongoose.model('labels', labelSchema);