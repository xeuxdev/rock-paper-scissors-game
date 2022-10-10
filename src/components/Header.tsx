const Header = () => {
  return (
    <div className="w-full md:max-w-[43.75rem] mx-auto rounded-lg md:rounded-xl border-[3px] border-Header h-24 md:h-36 p-3 flex items-center justify-between">
      <div className="logo pl-4">
        <img
          src="assets/logo.svg"
          alt="rock paper scissors game"
          className="w-20 h-12 md:w-full md:h-full"
        />
      </div>

      <div className="score grid place-items-center h-full w-20 md:w-32 rounded-md bg-white py-1.5">
        <p className="uppercase text-score_Text text-xs md:text-sm font-semibold">
          score
        </p>
        <p className="text-4xl md:text-6xl text-dark_Text font-bold">12</p>
      </div>
    </div>
  )
}

export default Header
