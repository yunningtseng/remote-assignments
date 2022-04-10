const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// > 在 Express 中提供靜態檔案
app.use(express.static("public"));

app.set("view engine", "pug");

// > 入口
const mainRoutes = require("./routes");
// > getData
const getDataRoutes = require("./routes/getData");

app.use(mainRoutes);
app.use("/getData", getDataRoutes);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
