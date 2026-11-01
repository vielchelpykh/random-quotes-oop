const express = require("express");
const quotes = require("./data/quotes");
const cors = require("cors");
const app = express();
const PORT = 3000;
const corsOprions = {
  origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
};

app.use(cors(corsOprions));

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on PORT ${PORT}`);
});
