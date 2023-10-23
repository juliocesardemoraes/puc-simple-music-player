import { musicFile } from "@/types/types";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";

export default function MusicItem({ songInfo }: { songInfo: musicFile }) {
  return (
    <div className={`${styles.music__list__item}`}>
      <Image
        alt="Music Album Image"
        width={50}
        height={50}
        src={`https://puc-web-player-backend.vercel.app${songInfo.imageAlbum}`}
      ></Image>
      <div className="song__info">
        <h3>{songInfo.song}</h3>
        <h4>{songInfo.author}</h4>
      </div>
    </div>
  );
}
