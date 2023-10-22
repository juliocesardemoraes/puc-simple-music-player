const express = require("express");
const app = express();
const path = require("path");

const musicDirectory = path.join(__dirname, "music");

app.get("/music/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(musicDirectory, filename);
  res.sendFile(filePath);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
