const express = require("express");
const app = express();
const cors = require("cors");
const musicRouter = require("./music/controller");

app.use(cors());

app.use(musicRouter);

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
