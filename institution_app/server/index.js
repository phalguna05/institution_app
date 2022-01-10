const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const url = "mongodb://127.0.0.1:27017/test_school";
const port = process.env.PORT || 3001;
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(port, () => console.log("Server is running on ", port))
	)
	.catch((error) => console.log(error.message));
