import Configstore from "configstore";
import pkg from "../package.json" assert { type: "json" };

export default class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No API key Found - Get a key at https://coingecko.com");
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No API key Found - Get a key at https://coingecko.com");
    }

    this.conf.delete("apiKey");

    return;
  }
}
