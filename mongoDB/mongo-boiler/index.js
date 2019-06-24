/**
 * 	`index.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const chalk = require("chalk");

// Chalk Theme
const log = console.log;
const title = chalk.bold.underline.green;

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
		log("Inserted 3 documents into the collection");
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
		log("Found the following records");
		log(docs);
		callback(docs);
	});
};

function run() {
	// Use connect method to connect to the server
	MongoClient.connect(url, function (err, client) {
		assert.equal(null, err);
		log("Connected successfully to server");

		const db = client.db(dbName);

		insertDocuments(db, function () {
			findDocuments(db, function () {
				client.close();
			});
		});
	});
}



/**
 * Application entry point
 */
(function () {
	log(title("MongoDB Boilerplate"));
	run();
})();


// EOF //
