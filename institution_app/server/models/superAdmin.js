const mongoose = require("mongoose");
const super_admin_schema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email is Required"],
	},
	password: {
		type: String,
		required: [true, "Password is Required"],
	},
});
module.exports = mongoose.model("SuperAdmin", super_admin_schema);
