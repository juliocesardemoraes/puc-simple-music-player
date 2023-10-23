import React from "react";

export default function Audio({ song }: { song: string }) {
  return (
    <audio key={song} controls autoPlay={true}>
      <source src={song} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}
