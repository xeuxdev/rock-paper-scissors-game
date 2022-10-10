type Props = {}

const GameCard = (props: Props) => {
  return (
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
  )
}

export default GameCard
