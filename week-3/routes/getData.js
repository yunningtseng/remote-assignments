// > assignment 2
const express = require("express");
const router = express();

// * http://localhost:3000/getData
router.get("/", (req, res) => {
  // * http://localhost:3000/getData?number=result
  let { number } = req.query;
  // let { number, y, x } = req.query;
  // console.log('x:', x);
  // console.log('y:', y);

  // > 一進入 getData 時 number 為空，!number 判斷為 true
  if (!number) {
    res.send("Lack of Parameter");
    // > 若 number 非數字或非正整數，判斷為 true
  } else if (isNaN(number) || number <= 0) {
    res.send("Wrong Parameter");
    // > 計算加總 1 to i
  } else {
    let result = 0;
    for (i = 1; i <= number; i++) {
      // i, result
      // 1, 1
      // 2, 3 (1+2)
      // 3, 6 (1+2+3)
      result += i;
    }
    res.send(`${result}`);
  }
});

module.exports = router;
