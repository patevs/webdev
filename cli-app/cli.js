#!/usr/bin/env node

/**
 * 	`cli.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
// const logUpdate = require("log-update");

// const meow = require("meow");
// const cliApp = require(".");

// Chalk Theme
const log = console.log;
const title = chalk.bold.underline.green;

/***************
 * * FUNCTIONS *
 ***************/

function cli() {
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
			log("\nOrder receipt:");
			log(JSON.stringify(answers, null, "  "));
		});
}

/* ora usage
const spinner = ora("Loading unicorns").start();
setTimeout(() => {
	spinner.color = "yellow";
	spinner.text = "Loading rainbows";
}, 1000);
*/

/* log-update usage
const frames = ["-", "\\", "|", "/"];
let i = 0;
setInterval(() => {
	const frame = frames[i = ++i % frames.length];

	logUpdate(
		`
        ♥♥
   ${frame} unicorns ${frame}
        ♥♥
`);
}, 80);
*/

/**
 * Application entry point
 */
(function () {
	log(title("\nWELCOME TO CLI-APP\n"));
	const spinner = ora("Loading CLI...").start();
	setTimeout(() => {
		spinner.succeed();
		cli();
	}, 2000);
})();

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
