import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key ".green + "https://coingecko.com",
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    console.log("Hello from show");
  },
  remove() {
    console.log("Hello from remove");
  },
};

export default key;
