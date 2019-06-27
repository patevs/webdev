#!/usr/bin/env node

/**
 * 	`cli.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/

const { Signale } = require("signale");
const chalk = require("chalk");

/***********
 * * THEME *
 ***********/

const log = console.log;
const green = chalk.green;

/***************
 * * FUNCTIONS *
 ***************/

/**
 *	Signale logging examples
 */
function runLogging() {
	//..
	const signale = require("signale");

	signale.await("AWAIT");
	signale.pause("PAUSE");
	signale.pending("PENDING");
	signale.wait("WAIT");
	signale.watch("WATCH");

	log();

	signale.fav("FAV");
	signale.info("INFO");
	signale.note("NOTE");
	signale.star("STAR");
	signale.start("START");
	signale.success("SUCCESS");
	signale.warn("WARN");

	signale.error("ERROR");
	signale.debug("DEBUG");
	signale.fatal(new Error("FATAL ERROR"));

	log();

	// signale.log("LOG");
	signale.complete({ prefix: "[task]", message: "Fix issue #59", suffix: "(@klauscfhq)" });

	log();
	//..
}

/**
 * interactive logging example
 */
function runIteractiveLog() {
	const interactive = new Signale({ interactive: true, scope: "interactive" });
	interactive.await("[%d/4] - Process A", 1);
	setTimeout(() => {
		interactive.success("[%d/4] - Process A", 2);
		setTimeout(() => {
			interactive.await("[%d/4] - Process B", 3);
			setTimeout(() => {
				interactive.error("[%d/4] - Process B", 4);
				setTimeout(() => { }, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}

/**
 * Application entry point
 */
(function () {
	//..
	log(green("WELCOME TO CLI LOG"));
	runLogging();
	runIteractiveLog();
	//..
})();

// EOF //
