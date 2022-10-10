const GameDefault = () => {
  return (
    <div className="w-full md:max-w-[31.25rem] h-[18.75rem] md:h-[28.125rem] mx-auto relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[url('/assets/bg-triangle.svg')] w-2/4 h-2/4  bg-center bg-no-repeat bg-contain"></div>
      <div className="flex flex-wrap justify-between">
        <button
          className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-paper_gradient_2 relative grid place-items-center border-b-[10px] border-b-paper_gradient_1 shadow-lg hover:cursor-pointer"
          aria-label="select for paper"
        >
          <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
            <img
              src="/assets/icon-paper.svg"
              alt="select for paper"
              className="md:w-16 md:h-20"
            />
          </div>
        </button>

        <button
          className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-scissors_gradient_2 relative grid place-items-center border-b-[10px] border-b-scissors_gradient_1 shadow-lg hover:cursor-pointer self-end ml-auto"
          aria-label="select for scissors"
        >
          <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
            <img
              src="/assets/icon-scissors.svg"
              alt="select for scissors"
              className="md:w-16 md:h-20"
            />
          </div>
        </button>

        <button
          className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-rock_gradient_2 grid place-items-center border-b-[10px] border-b-rock_gradient_1 shadow-lg hover:cursor-pointer items-center absolute bottom-0 left-1/2 -translate-x-1/2"
          aria-label="select for rock"
        >
          <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
            <img
              src="/assets/icon-rock.svg"
              alt="select for rock"
              className="md:w-16 md:h-20"
            />
          </div>
        </button>
      </div>
    </div>
  )
}

export default GameDefault
