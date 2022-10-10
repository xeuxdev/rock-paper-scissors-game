type Props = {
  name: string
}

const GameCard = ({ name }: Props) => {
  return (
    <button
      className={`w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-${name}_gradient_2 relative grid place-items-center border-b-[10px] border-b-${name}_gradient_1 shadow-lg hover:cursor-pointer`}
      aria-label={`select for ${name}`}
    >
      <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
        <img
          src={`/assets/icon-${name}.svg`}
          alt={`select for ${name}`}
          className="md:w-16 md:h-20"
        />
      </div>
    </button>
  )
}

export default GameCard
