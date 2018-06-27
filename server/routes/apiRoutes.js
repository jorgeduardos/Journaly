const mongoose = require("mongoose");

const Month = mongoose.model("months");

module.exports = app => {
	app.post("/api/new_month", async (req, res) => {
		const month = await new Month({
			date: req.body.date,
			_user: req.user.id
		}).save();
		// console.log("new_month route request", req.body);
		res.send(req.user);
	});

	app.get("/api/months", async (req, res) => {
		const months = await Month.find({ _user: req.user.id });
		res.send(months);
	});

	app.delete("/api/delete_month", async (req, res) => {
		await Month.deleteOne({ _id: req.body.monthID });
		const months = await Month.find({ _user: req.user.id });
		res.send(months);
	});
};
