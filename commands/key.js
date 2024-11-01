import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";
import isRequired from "../utils/validation.js";

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key ".green + "https://coingecko.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log("Current API key: ", key.yellow);
      return key;
    } catch (error) {
      console.error(error.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      console.log(keyManager, "1");
      keyManager.deleteKey();
      console.log("Key removed".blue);

      return;
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

export default key;
