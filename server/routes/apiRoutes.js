const mongoose = require("mongoose");

const Month = mongoose.model("months");
const Day = mongoose.model("days");

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
		await Day.deleteMany({ _month: req.body.monthID });
		const months = await Month.find({ _user: req.user.id });
		res.send(months);
	});

	// dayRoutes

	app.post("/api/new_day", async (req, res) => {
		const day = await new Day({
			date: req.body.date,
			toDo: [],
			goodThings: "",
			improve: "",
			notes: "",
			_month: req.body.monthID, //month.id
			_user: req.user.id
		}).save();
		// console.log("new_month route request", req.body);
		res.send(req.user);
	});

	app.get("/api/days", async (req, res) => {
		const days = await Day.find({
			_user: req.user.id
		});
		res.send(days);
	});

	app.delete("/api/delete_day", async (req, res) => {
		// console.log(req.body);
		await Day.deleteOne({ _id: req.body.dayID });
		const days = await Day.find({ _user: req.user.id });
		res.send(days);
	});
};
