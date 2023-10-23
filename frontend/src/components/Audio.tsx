import React from "react";

export default function Audio({ song }: { song: string }) {
  console.log("song", song);
  return (
    <audio key={song} controls>
      <source src={song} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}
