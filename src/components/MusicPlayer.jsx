const MusicPlayer = () => {
  return (
    <div className="hidden sm:flex flex-col gap-1 ">
      <div className="h-1 w-full bg-zinc-600 rounded-full">
        <div className="h-1 w-20 bg-zinc-100 rounded-full"></div>
      </div>
      <div className="text-zinc-500 flex justify-between tracking-wider text-[11px]">
        <p>2:11</p>
        <p>3:35</p>
      </div>
    </div>
  );
};

export default MusicPlayer;
