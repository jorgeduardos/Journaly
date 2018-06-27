const mongoose = require("mongoose");
const { Schema } = mongoose;

const daysSchema = new Schema({
	toDo: Array,
	goodThings: String,
	improve: String,
	notes: String,
	_month: { type: Schema.Types.ObjectId, ref: "Month" }
});

module.exports = daysSchema;
