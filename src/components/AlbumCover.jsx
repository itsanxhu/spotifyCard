import { SiAirplayaudio } from "react-icons/si";

const AlbumCover = () => {
  return (
    <div className="flex justify-between items-center">
      <img
        className="w-18 rounded-2xl sm:w-full"
        src="cover.jpg"
        alt="Album cover"
      />
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-700/40 text-rose-600 sm:hidden">
        <SiAirplayaudio size={30} />
      </div>
    </div>
  );
};

export default AlbumCover;
