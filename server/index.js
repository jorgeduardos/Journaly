const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");
const bodyParser = require("body-parser");

require("./models/User.js");
require("./models/Months.js");
require("./models/Day.js");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
	console.log("listining on port:", PORT);
});
