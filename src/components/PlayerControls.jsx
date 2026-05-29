import { useState } from "react";
import { FaPause } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import {
  IconPlayerTrackPrevFilled,
  IconPlayerTrackNextFilled,
  IconStar,
} from "@tabler/icons-react";

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  const playerBtn =
    "text-zinc-200 cursor-pointer active:scale-90 transition-transform duration-200";
  return (
    <div className="relative flex items-center justify-center mb-2">
      <div className="hidden sm:block absolute left-0 text-zinc-600 ">
        <IconStar stroke={2} size={20} />
      </div>
      <div className="relative flex items-center gap-6">
        <IconPlayerTrackPrevFilled
          size={30}
          sm:size={34}
          className={playerBtn}
        />
        <div className="flex justify-center items-center">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <IoPlay
                size={34}
                sm:size={38}
                className="text-zinc-200 cursor-pointer"
              />
            ) : (
              <FaPause
                size={34}
                sm:size={38}
                className="text-zinc-200 cursor-pointer"
              />
            )}
          </button>
        </div>
        <IconPlayerTrackNextFilled
          size={30}
          sm:size={34}
          className={playerBtn}
        />
      </div>
    </div>
  );
};

export default PlayerControls;
