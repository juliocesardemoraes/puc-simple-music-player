"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { fetchMusic, fetchMusicList } from "@/api/music";

interface musicFile {
  author: "string";
  file: "string";
  song: "string";
  imageAlbum: "string";
}

export default function MusicPlayer() {
  const [song, setSong] = useState<any>("");
  const [songList, setSongList] = useState<Array<musicFile> | []>([]);
  const [playingNow, setPlayingNow] = useState("");
  useEffect(() => {
    const fetchMusicUseEffect = async () => {
      const songListFromApi = await fetchMusicList();
      setSongList(songListFromApi.musicFiles);
    };
    fetchMusicUseEffect();
  }, []);

  const selectSong = async (file: musicFile) => {
    const music = await fetchMusic(file.file);
    setPlayingNow(file.song);
    setSong(music);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <p>Criando Soluções</p>

      <div className={`${styles.block}`}>
        <div className={`${styles.block__container}`}>
          <div className={`${styles.music__player}`}>
            {song && (
              <audio controls>
                <source src={song} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
        <div className={`${styles.block__container} ${styles.music__list}`}>
          {song && (
            <>
              <h3>Tocando Agora</h3>
              <h3>{playingNow}</h3>
              <hr></hr>
            </>
          )}
          {songList?.length > 0 && (
            <>
              {songList?.map((songInfo) => {
                return (
                  <div
                    key={songInfo.file}
                    className={`${styles.music__list__item}`}
                    onClick={() => {
                      selectSong(songInfo);
                    }}
                  >
                    <div className="song__info">
                      <h3>{songInfo.song}</h3>
                      <h4>{songInfo.author}</h4>
                    </div>
                    <img
                      src={`https://puc-web-player-backend.vercel.app/src${songInfo.imageAlbum}`}
                    ></img>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
