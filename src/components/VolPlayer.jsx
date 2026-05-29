import { IoVolumeOff } from "react-icons/io5";
import { HiVolumeUp } from "react-icons/hi";
const VolPlayer = () => {
  return (
    <div className="hidden relative sm:flex items-center h-5 justify-center">
      <div className="absolute h-1 w-43 bg-zinc-600 rounded-full">
        <div className="h-1 w-32 bg-zinc-100 rounded-full"></div>
      </div>
      <IoVolumeOff size={14} className="absolute left-1.5 text-zinc-600" />
      <HiVolumeUp size={14} className="absolute right-1 text-zinc-600" />
    </div>
  );
};

export default VolPlayer;
