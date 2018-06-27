const mongoose = require("mongoose");
const { Schema } = mongoose;

const monthSchema = new Schema({
	date: Object,
	_user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("months", monthSchema);


