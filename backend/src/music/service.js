const path = require("path");
const musicDirectory = path.join(__dirname, "/assets/music");
const imageDirectory = path.join(__dirname, "/assets/album");
const fs = require("fs");

/**
 * Get Specific music path
 * @param {*} filename music name
 * @returns playable format of the music
 */
const getMusicMp3 = (filename) => {
  const filePath = path.join(musicDirectory, filename);
  return filePath;
};

/**
 * Get Music Info Function
 * @returns {Array} Array with all the musics from this backend directory
 */
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
      return { error: true, errorMessage: error };
    }
  });

  return musicFiles;
};

module.exports = { getMusicMp3, getMusicInfo };
