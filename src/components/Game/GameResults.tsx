import GameRipple from "./GameRipple"
const GameResults = () => {
  return (
    <div className="w-full md:max-w-[31.25rem] h-[18.75rem] md:h-[28.125rem] mx-auto relative">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col md:flex-col-reverse items-center">
          <div
            className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-paper_gradient_2 relative grid place-items-center border-b-[10px] border-b-paper_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-paper_gradient_1"
            aria-label="select for paper"
          >
            <GameRipple />
            <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
              <img
                src="/assets/icon-paper.svg"
                alt="select for paper"
                className="md:w-16 md:h-20"
              />
            </div>
          </div>
          <p className="text-white text-sm md:text-lg font-bold mt-8 md:mt-0 md:mb-10">
            YOU PICKED
          </p>
        </div>

        <div className="flex flex-col md:flex-col-reverse items-center relative z-20">
          <div
            className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-scissors_gradient_2 relative grid place-items-center border-b-[10px] border-b-scissors_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-scissors_gradient_1 self-end ml-auto"
            aria-label="select for scissors"
          >
            <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
              <img
                src="/assets/icon-scissors.svg"
                alt="select for scissors"
                className="md:w-16 md:h-20"
              />
            </div>
          </div>

          <p className="text-white text-sm md:text-lg font-bold mt-8 md:mt-0 md:mb-10">
            THE HOUSE PICKED
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-14">
        <p className="uppercase text-white font-bold text-4xl mb-4">you lose</p>
        <button className="w-56 h-12 rounded-md bg-white text-dark_Text hover:text-rock_gradient_1 uppercase grid place-items-center">
          play again
        </button>
      </div>
    </div>
  )
}
export default GameResults
