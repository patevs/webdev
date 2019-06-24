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

// insert documents into database
const insertDocuments = function (db, callback) {
	// Get the documents collection
	const collection = db.collection("documents");
	// Insert some documents
	collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
};

// find all documents in database
const findDocuments = function (db, callback) {
	// Get the documents collection
	const collection = db.collection("documents");
	// Find some documents
	collection.find({}).toArray(function (err, docs) {
		assert.equal(err, null);
		console.log("Found the following records");
		console.log(docs);
		callback(docs);
	});
};

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	insertDocuments(db, function () {
		findDocuments(db, function () {
			client.close();
		});
	});
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
