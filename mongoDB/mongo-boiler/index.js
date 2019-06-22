/**
 * 	`index.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

/***************
 * * CONSTANTS *
 ***************/
// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "myproject";

/***************
 * * FUNCTIONS *
 ***************/

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	client.close();
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
