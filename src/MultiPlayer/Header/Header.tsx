import { useContext, useEffect } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"

const Header = () => {
  const { playerScore, player2Score } = useContext(MultiPlayerGameContext) //gets score from context

  return (
    <div className="w-full md:max-w-[43.75rem] mx-auto rounded-lg md:rounded-xl border-[3px] border-Header h-24 md:h-36 p-3 flex items-center justify-between mb-24 md:mb-14">
      <div className="logo pl-4">
        <img
          src="/assets/logo.svg"
          alt="rock paper scissors game"
          className="w-20 h-12 md:w-full md:h-full"
        />
      </div>

      <div className="score flex items-center h-full px-5 md:px-7 rounded-md bg-white py-1.5">
        <div className="flex items-center flex-col">
          <p className="uppercase text-score_Text text-xs md:text-sm font-semibold">
            You
          </p>
          <p className="text-4xl md:text-6xl text-dark_Text font-bold">
            {playerScore}
          </p>
        </div>
        <span className="block w-[2px] h-10 mt-3 bg-Header mx-5"></span>
        <div className="flex items-center flex-col">
          <p className="uppercase text-score_Text text-xs md:text-sm font-semibold">
            AI
          </p>
          <p className="text-4xl md:text-6xl text-dark_Text font-bold">
            {player2Score}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
