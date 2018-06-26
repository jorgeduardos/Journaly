const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	googleName: Object
});

mongoose.model("users", userSchema);
