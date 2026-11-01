import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";
import config from "../config.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/quotes/random`;
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const res = await fetch(url, options);
      const quote = await res.json();
      const { id, quote: text, author } = quote;
      return new Quote(id, text, author);
    } catch (err) {
      console.error(err);
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.API_URL}/quotes/random-single`;
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const res = await fetch(url, options);
      const quote = await res.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (err) {
      console.error(err);
    }
  }
}

export default RandomQuote;
