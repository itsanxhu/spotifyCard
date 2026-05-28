import { FaPause } from "react-icons/fa6";
import { HiVolumeUp } from "react-icons/hi";
import { IoVolumeOff } from "react-icons/io5";

import {
  IconPlayerTrackPrevFilled,
  IconPlayerTrackNextFilled,
  IconStar,
} from "@tabler/icons-react";

const Card = () => {
  return (
    <div className="h-104 w-63 bg-zinc-950 rounded-3xl p-4 flex flex-col justify-between">
      {/* imgCover */}
      <div>
        <img className="w-55 rounded-2xl" src="cover.jpg" alt="" />
      </div>
      {/* text and title */}
      <div className="leading-none py-4">
        <p className="truncate text-[15px] text-zinc-200">
          <span className="tracking-wider">STAY HERE 4 LIFE</span> (feat. Brent
          Faiyaz)
        </p>
        <p className="text-sm text-zinc-400 tracking-wide">A$AP Rocky</p>
      </div>
      {/* All 3 player container */}
      <div className="flex flex-col justify-center gap-2 pb-3">
        {/* Player */}
        <div className="flex flex-col gap-1 ">
          <div className="h-1 w-full bg-zinc-600 rounded-full">
            <div className="h-1 w-20 bg-zinc-100 rounded-full"></div>
          </div>
          <div className="text-zinc-500 flex justify-between tracking-wider text-[11px]">
            <p>2:11</p>
            <p>3:35</p>
          </div>
        </div>
        {/* star and Playericon */}
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 text-zinc-600 ">
            <IconStar stroke={2} size={20} />
          </div>
          <div className="flex items-center gap-6">
            <IconPlayerTrackPrevFilled size={34} className="text-zinc-200" />
            <FaPause size={38} className="text-zinc-200" />
            <IconPlayerTrackNextFilled size={34} className="text-zinc-200" />
          </div>
        </div>
        {/* volume */}
        <div className="relative flex items-center h-5 justify-center">
          <div className="absolute h-1 w-43 bg-zinc-600 rounded-full">
            <div className="h-1 w-32 bg-zinc-100 rounded-full"></div>
          </div>
          <IoVolumeOff size={14} className="absolute left-1.5 text-zinc-600" />
          <HiVolumeUp size={14} className="absolute right-1 text-zinc-600" />
        </div>
      </div>
    </div>
  );
};

export default Card;
