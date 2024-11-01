import { Command } from "commander";
const program = new Command();
import check from "../commands/check.js";

program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <type>",
    "Add specifc coins in CSV format",
    "bitcoin,ethereum,tether"
  )
  .option("--curr <currency>", "Change the currency", "usd")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
