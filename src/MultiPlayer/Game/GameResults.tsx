import { useContext, useEffect } from "react"
import GameRipple from "./GameRipple"
import { motion } from "framer-motion"
import { MultiPlayerGameContext } from "../MultiPlayerContext"
import { whoWinsTheGame } from "../../components/Game/GamePlayLogic"
const GameResults = () => {
  const {
    player2Choice,
    playerChoice,
    setPlayerChoice,
    setPlayer2Choice,
    gameResult,
    setGameResult,
    playerScore,
    setPlayerScore,
    player2Score,
    setPlayer2Score,
    socket,
    playerName,
    player2Name,
  } = useContext(MultiPlayerGameContext)
  let whoWon = ""

  useEffect(() => {
    if (playerChoice !== "" && player2Choice !== "") {
      const winner = whoWinsTheGame(playerChoice, player2Choice)

      // if (winner === "It's A TIE") {
      //   setPlayer2Score(player2Score)
      //   setPlayerScore(playerScore)
      // } else {
      //   winner === "YOU WIN"
      //     ? setPlayerScore((prevScore) => prevScore + 1)
      //     : winner === "YOU LOSE"
      //     ? setPlayer2Score((prevScore) => prevScore + 1)
      //     : setPlayerScore(playerScore)
      // }

      switch (winner) {
        case "It's A TIE":
          setPlayer2Score(player2Score)
          setPlayerScore(playerScore)

          break
        case "YOU WIN":
          whoWon = "player1"
          setPlayerScore((prevScore) => prevScore + 1)
          break
        case "YOU LOSE":
          whoWon = "player2"
          setPlayer2Score((prevScore) => prevScore + 1)
          break

        default:
          break
      }

      setGameResult(whoWon)
    }
  }, [player2Choice, playerChoice])

  const handleReset = () => {
    setPlayerChoice("")
    setPlayer2Choice("")
    setGameResult("")

    socket.emit("reset", {
      roomId: localStorage.getItem("roomId"),
    })
  }

  return (
    <div className="w-full sm:max-w-[31.25rem] md:max-w-[48.25rem] h-[18.75rem] md:h-[28.125rem] mx-auto relative">
      <div className="flex items-center justify-between">
        {/* player */}
        <div className="flex flex-col md:flex-col-reverse items-center">
          <div
            className={`w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-${playerChoice}_gradient_2  grid place-items-center border-b-[10px] border-b-${playerChoice}_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-${playerChoice}_gradient_1`}
            aria-label="YOU playerED"
          >
            {gameResult === "YOU WIN" && <GameRipple />}
            <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
              <img
                src={`/assets/icon-${playerChoice}.svg`}
                alt={`${playerChoice} selected`}
                className="md:w-16 md:h-20"
              />
            </div>
          </div>
          <p className="text-white text-sm md:text-xl font-bold mt-8 md:mt-0 md:mb-10">
            {playerName}
          </p>
        </div>

        {/* for desktop */}
        {gameResult && (
          <div className="hidden md:flex flex-col items-center mt-14">
            <p className="uppercase text-white font-bold text-4xl mb-4">
              {gameResult == "player1"
                ? `${playerName} won`
                : `${player2Name} won`}
            </p>
            <motion.button
              className="w-56 h-12 rounded-md bg-white text-dark_Text hover:text-rock_gradient_1 uppercase grid place-items-center"
              onClick={handleReset}
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
            >
              play again
            </motion.button>
          </div>
        )}

        <div className="flex flex-col md:flex-col-reverse items-center">
          {player2Choice === "" ? (
            // loader
            <div
              className="bg-bg_gradient_1 w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full relative grid place-items-center shadow-lg hover:cursor-pointer outline-none animate-pulse "
              aria-label="select for scissors"
            ></div>
          ) : (
            <motion.div
              className={`w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-${player2Choice}_gradient_2  grid place-items-center border-b-[10px] border-b-${player2Choice}_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-${player2Choice}_gradient_1 self-end ml-auto `}
              aria-label={`the house playered ${player2Choice}`}
            >
              {gameResult === "YOU LOSE" && <GameRipple />}
              <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
                <img
                  src={`/assets/icon-${player2Choice}.svg`}
                  alt={`the house playered ${player2Choice}`}
                  className="md:w-16 md:h-20"
                />
              </div>
            </motion.div>
          )}

          <p className="text-white text-sm md:text-xl font-bold mt-8 md:mt-0 md:mb-10">
            {player2Name}
          </p>
        </div>
      </div>

      {/* mobile result */}
      {gameResult && (
        <div className="flex flex-col items-center mt-14 md:hidden">
          <p className="uppercase text-white font-bold text-4xl mb-4">
            {gameResult == "player1"
              ? `${playerName} won`
              : `${player2Name} won`}
          </p>
          <motion.button
            className="w-56 h-12 rounded-md bg-white text-dark_Text hover:text-rock_gradient_1 uppercase grid place-items-center"
            onClick={handleReset}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.9 }}
          >
            play again
          </motion.button>
        </div>
      )}
    </div>
  )
}
export default GameResults
