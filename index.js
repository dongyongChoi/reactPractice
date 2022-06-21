const express = require("express");
const app = express();
const port = 5550;

const fs = require("fs");

const jsonFile = fs.readFileSync("./config.json", "utf8");
const jsonData = JSON.parse(jsonFile);
const mongodbUrl = jsonData.mongodbUrl;

const mongoose = require("mongoose");
mongoose
  .connect(mongodbUrl, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
