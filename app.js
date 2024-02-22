const express = require("express");
const app = express();
const PORT = 8000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`http://118.67.132.32:${PORT}`);
});
