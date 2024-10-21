#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const pkg = require("../package.json");

program.version(pkg.version).parse(process.argv);
console.log("Hello from coindex");
