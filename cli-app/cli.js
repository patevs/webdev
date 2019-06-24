#!/usr/bin/env node

/**
 * 	`cli.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/
const inquirer = require("inquirer");
// const meow = require("meow");
// const cliApp = require(".");


console.log("Hi, welcome to Node Pizza");

/***************
 * * FUNCTIONS *
 ***************/
inquirer
	.prompt([
		/* Pass your questions in here */
		{
			type: "confirm",
			name: "toBeDelivered",
			message: "Is this for delivery?",
			default: false
		},
	])
	.then(answers => {
		// Use user feedback for... whatever!!
		console.log("\nOrder receipt:");
		console.log(JSON.stringify(answers, null, "  "));
	});

/*
const cli = meow(`
	Usage
	  $ cli-app [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ cli-app
	  unicorns & rainbows
	  $ cli-app ponies
	  ponies & rainbows
`);

console.log(cliApp(cli.input[0] || "unicorns"));
*/

// EOF //
