import { useContext, useEffect, useState } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"
import GameDefault from "./GameDefault"
import GameResults from "./GameResults"

const Game = () => {
  const {
    playerChoice,
    player2Choice,
    playerScore,
    player2Score,
    setPlayerScore,
    setPlayer2Score,
    socket,
    setPlayer2Choice,
    setPlayerChoice,
    setGameResult,
  } = useContext(MultiPlayerGameContext)

  const roomId = localStorage.getItem("roomId")
  const [role, setRole] = useState("")

  useEffect(() => {
    // if (socket.connected == false && roomId && roomId !== "") {
    //   socket.emit(
    //     "join_room",
    //     {
    //       roomId: localStorage.getItem("roomId"),
    //       username:
    //         localStorage.getItem("creator") == "true"
    //           ? localStorage.getItem("player1Username")
    //           : localStorage.getItem("player2Username"),
    //     },
    //     (msg: string) => {
    //       console.log(msg)
    //       setPlayer2Name(msg)
    //     }
    //   )
    // }
    // localStorage.clear()
  }, [])

  useEffect(() => {
    socket.on("joined_room", (msg) => {
      console.log(msg, "balab")
    })
  })

  useEffect(() => {
    socket.on("received_choice", (data) => {
      const { username, choice, roomId, role } = data
      // console.log(username, choice, role)
      // console.log(role, "role")

      if (role == "creator") {
        setRole("creator")
        setPlayerChoice(`${choice}`)
      } else if (role == "joined") {
        setRole("joined")
        setPlayer2Choice(`${choice}`)
      }
    })
  })

  useEffect(() => {
    socket.on("play", (data) => {
      setPlayerChoice("")
      setPlayer2Choice("")
      setGameResult("")
    })
  })

  useEffect(() => {
    socket.on("reset_choice", (data) => {
      setPlayerChoice("")
      setPlayer2Choice("")
      setGameResult("")
      setPlayerScore(0)
      setPlayer2Score(0)
    })
  })

  useEffect(() => {
    localStorage.setItem("multi-playerScore", `${playerScore}`)
    localStorage.setItem("multi-player2Score", `${player2Score}`)
  }, [playerScore, player2Score])

  return (
    <div>
      {playerChoice == "" || player2Choice == "" ? (
        <GameDefault />
      ) : (
        <GameResults />
      )}
    </div>
  )

  // if playerchoice is defined
}

export default Game
