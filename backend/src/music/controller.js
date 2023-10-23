const Router = require("express");
const { getMusicMp3, getMusicInfo } = require("./service");

const musicRouter = Router();

musicRouter.get("/music/:filename", (req, res) => {
  const { filename } = req.params;
  if (!filename) return res.status(400).json({ error: "wrong input" });

  const specificMusic = getMusicMp3(filename);
  res.status(200).sendFile(specificMusic);
});

musicRouter.get("/music", (req, res) => {
  const musicFiles = getMusicInfo();
  res.json({ musicFiles });
});

module.exports = musicRouter;
