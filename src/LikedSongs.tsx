import { Track } from "./PlayList";

interface LikedSongsProps {
  likedTracks: number[];
  tracks: Track[];
}

const LikedSongs = ({ likedTracks, tracks }: LikedSongsProps) => {
  const likedSongs = tracks.filter((track) => likedTracks.includes(track.id));
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Liked Songs</h1>
      <ul className="space-y-2">
        {likedSongs.map((track) => (
          <li key={track.id} className="flex items-center">
            <span className="text-gray-700 mr-2">{track.title}</span>
            <span className="text-gray-500 text-sm">{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongs;
