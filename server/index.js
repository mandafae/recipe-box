const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Runnning on ${port}`);
});

module.exports = app;
