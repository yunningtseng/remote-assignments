const express = require("express");
const router = express.Router();

// * http://localhost:3000
router.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

module.exports = router;
