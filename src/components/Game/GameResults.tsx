import { useContext, useEffect } from "react"
import { GameContext } from "../contexts/GameContext"
import GameRipple from "./GameRipple"
import { motion } from "framer-motion"
const GameResults = () => {
  const {
    aiChoice,
    playerChoice,
    setPlayerChoice,
    setAiChoice,
    gameResult,
    setGameResult,
  } = useContext(GameContext)
  const aiOptions: string[] = ["paper", "scissors", "rock"]

  let gameResultIndex: string[] = ["YOU WIN", "YOU DRAW", "YOU LOSE"]
  const checkLogic = () => {
    if (playerChoice === aiChoice) {
      setGameResult(gameResultIndex[1])
    } else if (playerChoice === "scissors" && aiChoice === "paper") {
      setGameResult(gameResultIndex[0])
    } else if (playerChoice === "paper" && aiChoice === "rock") {
      setGameResult(gameResultIndex[0])
    } else if (playerChoice === "rock" && aiChoice === "scissors") {
      setGameResult(gameResultIndex[0])
    } else {
      setGameResult(gameResultIndex[2])
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      let randomNumber = Math.ceil(Math.round(Math.random() * 2))
      console.log(randomNumber)
      randomNumber !== undefined
        ? setAiChoice(aiOptions[randomNumber])
        : setAiChoice("")
      checkLogic()
    }, 1500)
    return () => {
      timeout
    }
  }, [])

  const handleReset = () => {
    setPlayerChoice("")
    setAiChoice("")
    setGameResult("")
  }
  console.log(playerChoice)
  console.log(aiChoice)
  console.log(gameResult)
  return (
    <div className="w-full sm:max-w-[31.25rem] md:max-w-[45.25rem] h-[18.75rem] md:h-[28.125rem] mx-auto relative">
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-col-reverse items-center">
          <div
            className={`w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-${playerChoice}_gradient_2 relative grid place-items-center border-b-[10px] border-b-${playerChoice}_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-${playerChoice}_gradient_1`}
            aria-label="YOU PICKED"
          >
            {gameResult === "YOU WIN" ? <GameRipple /> : ""}
            {/* <GameRipple /> */}
            <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
              <img
                src={`/assets/icon-${playerChoice}.svg`}
                alt={`${playerChoice} selected`}
                className="md:w-16 md:h-20"
              />
            </div>
          </div>
          <p className="text-white text-sm md:text-lg font-bold mt-8 md:mt-0 md:mb-10">
            YOU PICKED
          </p>
        </div>

        {gameResult !== "" && (
          <div className="hidden md:flex flex-col items-center mt-14">
            <p className="uppercase text-white font-bold text-4xl mb-4">
              {gameResult}
            </p>
            <button
              className="w-56 h-12 rounded-md bg-white text-dark_Text hover:text-rock_gradient_1 uppercase grid place-items-center"
              onClick={handleReset}
            >
              play again
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-col-reverse items-center">
          {aiChoice === "" ? (
            <div
              className="bg-bg_gradient_1 w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full relative grid place-items-center shadow-lg hover:cursor-pointer outline-none animate-pulse "
              aria-label="select for scissors"
            ></div>
          ) : (
            <motion.div
              className={`w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-${aiChoice}_gradient_2 relative grid place-items-center border-b-[10px] border-b-${aiChoice}_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-${aiChoice}_gradient_1 self-end ml-auto `}
              aria-label={`the house picked ${aiChoice}`}
            >
              {gameResult === "YOU LOSE" ? <GameRipple /> : ""}
              <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
                <img
                  src={`/assets/icon-${aiChoice}.svg`}
                  alt={`the house picked ${aiChoice}`}
                  className="md:w-16 md:h-20"
                />
              </div>
            </motion.div>
          )}

          <p className="text-white text-sm md:text-lg font-bold mt-8 md:mt-0 md:mb-10">
            THE HOUSE PICKED
          </p>
        </div>
      </div>
      {gameResult !== "" && (
        <div className="flex flex-col items-center mt-14 md:hidden">
          <p className="uppercase text-white font-bold text-4xl mb-4">
            {gameResult}
          </p>
          <button
            className="w-56 h-12 rounded-md bg-white text-dark_Text hover:text-rock_gradient_1 uppercase grid place-items-center"
            onClick={handleReset}
          >
            play again
          </button>
        </div>
      )}
    </div>
  )
}
export default GameResults
