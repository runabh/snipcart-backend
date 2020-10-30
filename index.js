const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/v2", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "v2.html"));
});
app.get("/v3", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "v3.html"));
});
app.get("/iframe", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "iframe.html"));
});
app.get("/abc.json", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "abc.json"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT);
