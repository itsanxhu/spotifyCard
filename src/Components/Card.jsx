import { useState } from "react";
import { FaPause } from "react-icons/fa6";
import { IoPlay, IoVolumeOff } from "react-icons/io5";
import { HiVolumeUp } from "react-icons/hi";
import { SiAirplayaudio } from "react-icons/si";
import {
  IconPlayerTrackPrevFilled,
  IconPlayerTrackNextFilled,
  IconStar,
} from "@tabler/icons-react";

const Card = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <div className="size-52 rounded-4xl sm:h-104 sm:w-63 bg-zinc-900 sm:rounded-3xl p-3.5 px-4 sm:p-4 flex flex-col justify-between">
      {/* imgCover */}
      <div className="flex justify-between items-center">
        <img className="sm:w-full w-18 rounded-2xl" src="cover.jpg" alt="" />
        <div className="sm:hidden text-rose-600 size-14 rounded-full bg-zinc-700/40 flex justify-center items-center">
          <SiAirplayaudio size={30} />
        </div>
      </div>
      {/* text and title */}
      <div className="sm:py-3 sm:mb-1 pt-1.5">
        <div className="overflow-hidden relative">
          {/* fade right */}
          <div className="hidden sm:block absolute inset-y-0 right-0 w-7 bg-linear-to-l from-zinc-900 to-transparent z-10" />
          <p className="whitespace-nowrap sm:text-sm text-zinc-200 animate-marquee leading-none">
            <span className="tracking-wider sm:text-[15px] text-[17px] leading-none">
              STAY HERE 4 LIFE{" "}
              <span className="hidden sm:inline ">(feat. Brent Faiyaz)</span>
            </span>
          </p>
          <p className="sm:text-[13px] text-neutral-400 sm:tracking-wide font-light ">
            A$AP Rocky
          </p>
        </div>
      </div>
      {/* All 3 player container */}
      <div className="flex flex-col justify-center gap-2 sm:pb-3">
        {/* Player */}
        <div className="hidden sm:flex flex-col gap-1 ">
          <div className="h-1 w-full bg-zinc-600 rounded-full">
            <div className="h-1 w-20 bg-zinc-100 rounded-full"></div>
          </div>
          <div className="text-zinc-500 flex justify-between tracking-wider text-[11px]">
            <>2:11</>
            <p>3:35</p>
          </div>
        </div>
        {/* star and Playericon */}
        <div className="relative flex items-center justify-center mb-2">
          <div className="hidden sm:block absolute left-0 text-zinc-600 ">
            <IconStar stroke={2} size={20} />
          </div>
          <div className="relative flex items-center gap-6">
            <IconPlayerTrackPrevFilled
              size={30}
              sm:size={34}
              className="text-zinc-200 cursor-pointer active:scale-90 transition-transform duration-200"
            />
            <div className="flex justify-center items-center">
              <button onClick={handlePlay}>
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
              className="text-zinc-200 cursor-pointer active:scale-90 transition-transform duration-200"
            />
          </div>
        </div>
        {/* volume */}
        <div className="hidden relative sm:flex items-center h-5 justify-center">
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
