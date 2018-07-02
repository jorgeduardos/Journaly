const mongoose = require("mongoose");
const { Schema } = mongoose;

const daysSchema = new Schema({
	date: Object,
	toDo: Object,
	goodThings: String,
	improve: String,
	notes: String,
	_month: { type: Schema.Types.ObjectId, ref: "Month" },
	_user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("days", daysSchema);
