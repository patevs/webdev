/**
 * `app.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/

const axios = require("axios");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

const handlebars = require("express-handlebars");

/***************
 * * FUNCTIONS *
 ***************/

app.engine(".hbs", handlebars({ extname: ".hbs" }));

app.set("PORT", PORT);

app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

/*
app.get("/", function (req, res) {
	res.render("index", { title: "Jobby" });
});
*/

app.get("/", function (req, res) {
	let url = "https://indreed.herokuapp.com/api/jobs?q=web+developer&limit=50";
	axios({
		method: "get",
		url
	})
		.then(function (response) {
			let jobs = response.data;
			res.render("index", { title: "Jobby", jobs: jobs });
		})
		.catch(function (error) {
			console.log(error);
		});

});

app.listen(app.get("PORT"), function () {
	console.log("Express started on http://localhost:" +
		app.get("PORT") + "; press Ctrl-C to terminate.");
});

/*
module.exports = (input, options = {}) => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return input + " & " + (options.postfix || "rainbows");
};
*/

// EOF //

