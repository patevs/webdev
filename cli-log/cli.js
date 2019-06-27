#!/usr/bin/env node
"use strict";
const meow = require("meow");
const cliLog = require(".");

const cli = meow(`
	Usage
	  $ cli-log [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ cli-log
	  unicorns & rainbows
	  $ cli-log ponies
	  ponies & rainbows
`);

console.log(cliLog(cli.input[0] || "unicorns"));
