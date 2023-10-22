const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const musicDirectory = path.join(__dirname, "music");

app.use(cors());

app.get("/music/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(musicDirectory, filename);
  res.sendFile(filePath);
});

const imageDirectory = path.join(process.cwd(), "album");

app.get("/music", (req, res) => {
  const musicFiles = [];

  fs.readdirSync(musicDirectory).forEach((file) => {
    try {
      if (file.endsWith(".mp3")) {
        const [author, song] = file.replace(/\.mp3|\[|\]/g, "").split("-");

        const fileImage = file.replace(".mp3", ".jpg");

        const imagePath = path.join(imageDirectory, fileImage);
        const imagePathRemove = imagePath.replace("/var/task", "");

        musicFiles.push({
          file: file,
          author: author,
          song: song,
          imageAlbum: imagePathRemove,
        });
      }
    } catch (error) {
      console.log("ERROR", error);
      throw error;
    }
  });

  res.json({ musicFiles });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
