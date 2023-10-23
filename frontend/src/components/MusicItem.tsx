import { musicFile } from "@/types/types";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";

export default function MusicItem({
  songInfo,
  className = "",
}: {
  songInfo: musicFile;
  className: string;
}) {
  return (
    <div
      className={`${styles.music__list__item} ${styles.song__item} ${styles?.[className]}`}
    >
      <Image
        alt="Music Album Image"
        width={50}
        height={50}
        src={`https://puc-web-player-backend.vercel.app${songInfo.imageAlbum}`}
      ></Image>
      <div>
        <h3 className={`${styles.dark__hover}`}>{songInfo.song}</h3>
        <h4 className={`${styles.dark__hover}`}>{songInfo.author}</h4>
      </div>
    </div>
  );
}
