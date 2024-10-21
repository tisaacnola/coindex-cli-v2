#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
import pkg from "../package.json" assert { type: "json" };

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://coingecko.com")
  .parse(process.argv);
