const path = require("path");
const musicDirectory = path.join(__dirname, "/assets/music");
const imageDirectory = path.join(process.cwd(), "/assets/album");
const fs = require("fs");

const getMusicMp3 = (filename) => {
  const filePath = path.join(musicDirectory, filename);
  return filePath;
};

const getMusicInfo = () => {
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

  return musicFiles;
};

module.exports = { getMusicMp3, getMusicInfo };
