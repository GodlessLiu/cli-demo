#! /usr/bin/env node

const { program } = require("commander");
const myHelp = require("../lib/core/help.js");
const myCommander = require("../lib/core/cliCommander.js");

myHelp(program);
myCommander(program);
program.parse(process.argv);
