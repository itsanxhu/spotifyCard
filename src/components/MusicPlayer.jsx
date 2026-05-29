const MusicPlayer = () => {
  return (
    <div className="hidden sm:flex flex-col gap-1 ">
      <div className="w-full h-1 rounded-full bg-zinc-600">
        <div className="w-20 h-1 rounded-full bg-zinc-100"></div>
      </div>
      <div className="flex justify-between text-[11px] text-zinc-500 tracking-wider">
        <p>2:11</p>
        <p>3:35</p>
      </div>
    </div>
  );
};

export default MusicPlayer;
