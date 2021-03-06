const express = require("express");
const router = express.Router();
const BitlyClient = require("bitly").BitlyClient;
const bitly = new BitlyClient(process.env.TOKEN_BITLY);

async function shorterer(req, res, next) {
  try {
    const longUrl = req.body.url;
    const response = await bitly.shorten(longUrl);
    const shortUrl = response.link;
    res.send(shortUrl);
  } catch (err) {
    res.sendStatus(400);
  }
}

/* GET home page. */
router.get("/", (req, res, next) => {
  res.redirect("/shorter");
});
// TODO: Endpoint test, delete it in the future
router.get("/test", (req, res, next) => {
  res.send("Testing");
});
router.post("/shorter", (req, res, next) => {
  shorterer(req, res, next);
});

module.exports = router;
