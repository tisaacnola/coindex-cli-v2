#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
import pkg from "../package.json" assert { type: "json" };

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://coingecko.com")
  .command("check", "Check Coin Price Info")
  .parse(process.argv);
