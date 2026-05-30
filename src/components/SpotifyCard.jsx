import VolPlayer from "./VolPlayer";
import MusicPlayer from "./MusicPlayer";
import TitleName from "./TitleName";
import PlayerControls from "./PlayerControls";
import AlbumCover from "./AlbumCover";

const SpotifyCard = () => {
  return (
    <div className="flex flex-col justify-between p-3.5 px-4 w-52 h-52 rounded-4xl bg-zinc-900 cursor-pointer active:scale-95 transition-transform duration-200 shadow-2xl sm:p-4 sm:w-63 sm:h-104 sm:rounded-3xl">
      <AlbumCover />
      <TitleName />
      <div className="flex flex-col justify-center gap-2 sm:pb-3">
        <MusicPlayer />
        <PlayerControls />
        <VolPlayer />
      </div>
    </div>
  );
};

export default SpotifyCard;
