"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { fetchMusic, fetchMusicList } from "@/api/music";
import Image from "next/image";
import Audio from "./Audio";
import { musicFile } from "@/types/types";
import MusicItem from "./MusicItem";

export default function MusicPlayer() {
  const [song, setSong] = useState<any>("");
  const [songList, setSongList] = useState<Array<musicFile> | []>([]);
  const [playingNow, setPlayingNow] = useState<musicFile | any>("");
  useEffect(() => {
    const fetchMusicUseEffect = async () => {
      const songListFromApi = await fetchMusicList();
      setSongList(songListFromApi.musicFiles);
    };
    fetchMusicUseEffect();
  }, []);

  const selectSong = async (file: musicFile) => {
    const music = await fetchMusic(file.file);
    setPlayingNow(file);
    setSong(music);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <p>Criando Soluções</p>

      <div className={`${styles.block}`}>
        <div className={`${styles.block__container}`}>
          <div className={`${styles.music__player}`}>
            {playingNow?.imageAlbum && (
              <Image
                alt="Music Album Image"
                width={150}
                height={180}
                src={`https://puc-web-player-backend.vercel.app${playingNow.imageAlbum}`}
              ></Image>
            )}
            {song && <Audio song={song}></Audio>}
          </div>
        </div>
        <div className={`${styles.block__container} ${styles.music__list}`}>
          <h1>Playlist</h1>

          {song && (
            <>
              <h2>Tocando Agora</h2>
              <MusicItem songInfo={playingNow}></MusicItem>
              <hr></hr>
            </>
          )}
          {songList?.length > 0 && (
            <>
              <h2>Musicas da playlist</h2>
              {songList?.map((songInfo) => {
                return (
                  <div
                    key={songInfo.file}
                    onClick={() => {
                      selectSong(songInfo);
                    }}
                  >
                    <MusicItem
                      songInfo={songInfo}
                      className={"song__item__selectable"}
                    ></MusicItem>
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
