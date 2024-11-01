import axios from "axios";
import colors from "colors";

export default class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=";
  }
  async getPriceData(coinOption, currOption) {
    try {
      const res = await axios.get(
        `${this.baseUrl}${currOption}&ids=${coinOption}&x_cg_api_key=${this.apiKey}`
      );

      let output = " ";
      res.data.forEach((coin) => {
        output += `
          Coin: ${coin.symbol.toUpperCase().yellow} (${coin.name}) |
          Price: ${String(coin.current_price).green} |
          Rank: ${String(coin.market_cap_rank).blue}\n
          `;
      });

      return output;
    } catch (error) {
      console.error(error);
    }
  }
}
