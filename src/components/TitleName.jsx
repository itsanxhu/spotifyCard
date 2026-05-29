const TitleName = () => {
  return (
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
  );
};

export default TitleName;
