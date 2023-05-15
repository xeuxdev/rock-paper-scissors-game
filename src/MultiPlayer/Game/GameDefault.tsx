import { useContext, useEffect } from "react"
import { motion } from "framer-motion"
import { MultiPlayerGameContext } from "../MultiPlayerContext"

const GameDefault = () => {
  const { setPlayerChoice, setPlayer2Choice, socket, setPlayer2Name } =
    useContext(MultiPlayerGameContext)

  useEffect(() => {
    socket.on("joined_room", (data) => {
      // console.log(data, "joined_room")
      // use toast herer
      setPlayer2Name(data)
    })
  }, [])

  const handlePlayerChoice = (choice: string) => {
    const isCreator = sessionStorage.getItem("creator")
    // const isJoined = localStorage.getItem("joined")

    // console.log(object);
    if (isCreator == "true") {
      setPlayerChoice(choice)
    } else {
      setPlayer2Choice(choice)
    }
    // setPlayerChoice(choice)

    const username =
      isCreator == "true"
        ? sessionStorage.getItem("player1Username")
        : sessionStorage.getItem("player2Username")

    socket.emit("send_choice", {
      choice,
      username,
      roomId: sessionStorage.getItem("roomId"),
      role: isCreator == "true" ? "creator" : "joined",
    })
  }

  return (
    <div className="w-full md:max-w-[31.25rem] h-[18.75rem] md:h-[28.125rem] mx-auto relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[url('/assets/bg-triangle.svg')] w-2/4 h-2/4  bg-center bg-no-repeat bg-contain"></div>
      <div className="flex flex-wrap justify-between">
        {/* paper */}
        <motion.button
          className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-paper_gradient_2 relative grid place-items-center border-b-[10px] border-b-paper_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-paper_gradient_1"
          aria-label="select for paper"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handlePlayerChoice("paper")}
        >
          <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
            <img
              src="/assets/icon-paper.svg"
              alt="select for paper"
              className="md:w-16 md:h-20"
            />
          </div>
        </motion.button>

        {/* scissors */}
        <motion.button
          className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-scissors_gradient_2 relative grid place-items-center border-b-[10px] border-b-scissors_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-scissors_gradient_1 self-end ml-auto"
          aria-label="select for scissors"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handlePlayerChoice("scissors")}
        >
          <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
            <img
              src="/assets/icon-scissors.svg"
              alt="select for scissors"
              className="md:w-16 md:h-20"
            />
          </div>
        </motion.button>

        {/* rock */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <motion.button
            className="w-[8.75rem] h-[8.75rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full bg-rock_gradient_2 grid place-items-center border-b-[10px] border-b-rock_gradient_1 shadow-lg hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-rock_gradient_1"
            aria-label="select for rock"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePlayerChoice("rock")}
          >
            <div className="bg-white w-[6.25rem] h-[6.25rem] md:w-[9.6875rem] md:h-[9.6875rem] rounded-full grid place-items-center border-t-[10px] border-t-bg_gradient_1/30">
              <img
                src="/assets/icon-rock.svg"
                alt="select for rock"
                className="md:w-16 md:h-20"
              />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default GameDefault
