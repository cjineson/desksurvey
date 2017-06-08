const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const deskSchema = new mongoose.Schema({
	floor: {
		type: String,
		required: true
	},
	floor: {
		type: String,
		required: true
	},
	area: {
		type: String,
		required: true
	},
	notes: {
		type: String,
		trim: true
	},
	tags: [String]
});

deskSchema.pre('save', function(next) {
	if (!this.isModified('name')) {
		next(); 
	};
	next();
})

module.exports = mongoose.model('Desk', deskSchema);