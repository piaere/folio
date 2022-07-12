const express = require("express");
const { data } = require("./data");


const app = express();
const port = 8000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/get-data", (req, res) => {
  res.status(200).json({ status: 200, data: data });
});


app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);
});
