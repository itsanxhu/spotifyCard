import { SiAirplayaudio } from "react-icons/si";
const AlbumCover = () => {
  return (
    <div className="flex justify-between items-center">
      <img
        className="sm:w-full w-18 rounded-2xl"
        src="cover.jpg"
        alt="Album cover"
      />
      <div className="sm:hidden text-rose-600 size-14 rounded-full bg-zinc-700/40 flex justify-center items-center">
        <SiAirplayaudio size={30} />
      </div>
    </div>
  );
};

export default AlbumCover;
