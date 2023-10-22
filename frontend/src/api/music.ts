export const fetchMusicList = async () => {
  const response = await fetch(
    "https://puc-web-player-backend.vercel.app/music/"
  );
  const musicList = await response.json();
  return musicList;
};

export const fetchMusic = async (musicName: string) => {
  const response = await fetch(
    `https://puc-web-player-backend.vercel.app/music/${musicName}`
  );
  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    return url;
  } else {
    console.error("Failed to fetch audio file.");
  }
};
