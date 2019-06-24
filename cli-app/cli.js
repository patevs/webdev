#!/usr/bin/env node

/**
 * 	`cli.js`
 */

"use strict";

/*************
 * * IMPORTS *
 *************/
const meow = require("meow");
const cliApp = require(".");

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

// EOF //
