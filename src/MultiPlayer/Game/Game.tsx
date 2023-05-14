import { useContext, useEffect } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"
import GameDefault from "./GameDefault"
import GameResults from "./GameResults"

const Game = () => {
  const {
    playerChoice,
    playerScore,
    player2Score,
    socket,
    setPlayer2Choice,
    setPlayerChoice,
    setGameResult,
  } = useContext(MultiPlayerGameContext)

  const roomId = localStorage.getItem("roomId")

  if (socket.connected == false && roomId && roomId !== "") {
    socket.emit(
      "join_room",
      {
        roomId: localStorage.getItem("roomId"),
        username:
          localStorage.getItem("creator") == "true"
            ? localStorage.getItem("player1Username")
            : localStorage.getItem("player2Username"),
      },
      (msg: string) => {
        console.log(msg)
      }
    )
  }

  useEffect(() => {
    socket.on("received_choice", (data) => {
      const { username, choice, roomId, role } = data

      console.log(choice)
      setPlayer2Choice(`${choice}`)
      // gameInPlay()
    })
  })

  useEffect(() => {
    socket.on("reset_choice", (data) => {
      setPlayerChoice("")
      setPlayer2Choice("")
      setGameResult("")
    })
  })

  useEffect(() => {
    localStorage.setItem("multi-playerScore", `${playerScore}`)
    localStorage.setItem("multi-player2Score", `${player2Score}`)
  }, [playerScore, player2Score])

  return <div>{playerChoice === "" ? <GameDefault /> : <GameResults />}</div>
}

export default Game
