import React, { useState, useEffect } from "react";
import musicData from "./Music.json";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import LikedSongs from "./LikedSongs";

export interface Track {
  id: number;
  title: string;
  duration: string;
}

const Playlist = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [likedTracks, setLikedTracks] = useState<number[]>([]);
  const [showLikedSongs, setShowLikedSongs] = useState<boolean>(false);

  useEffect(() => {
    const allTracks = musicData.genres.flatMap((genre) =>
      genre.artists.flatMap((artist) =>
        artist.albums.flatMap((album) => album.tracks)
      )
    );

    setTracks(allTracks);
  }, []);

  const handleLikeTrack = (trackId: number) => {
    if (likedTracks.includes(trackId)) {
      setLikedTracks(likedTracks.filter((id) => id !== trackId));
    } else {
      setLikedTracks([...likedTracks, trackId]);
    }
  };
  const toggleLikedSongs = () => {
    setShowLikedSongs(!showLikedSongs);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Playlist</h1>
        <ul className="space-y-2">
          {tracks.map((track) => (
            <li key={track.id} className="flex items-center">
              <button
                className="mr-2 focus:outline-none"
                onClick={() => handleLikeTrack(track.id)}
              >
                {likedTracks.includes(track.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-gray-500" />
                )}
              </button>
              <span className="text-gray-700 mr-2">{track.title}</span>
              <span className="text-gray-500 text-sm">{track.duration}</span>
            </li>
          ))}
        </ul>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleLikedSongs}
        >
          {showLikedSongs ? "Hide Liked Songs" : "Show Liked Songs"}
        </button>
      </div>
      {showLikedSongs && (
        <LikedSongs likedTracks={likedTracks} tracks={tracks} />
      )}
    </>
  );
};
export default Playlist;
