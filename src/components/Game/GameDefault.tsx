import GameCard from "./GameCard"

const GameDefault = () => {
  return (
    <div className="w-full md:max-w-[31.25rem] h-[18.75rem] md:h-[28.125rem] mx-auto relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[url('/assets/bg-triangle.svg')] w-2/4 h-2/4  bg-center bg-no-repeat bg-contain"></div>
      <div className="flex flex-wrap justify-between">
        <GameCard name="paper" />
        <GameCard name="scissors" />
        <div className="items-center absolute bottom-0 left-1/2 -translate-x-1/2">
          <GameCard name="rock" />
        </div>
      </div>
    </div>
  )
}

export default GameDefault
