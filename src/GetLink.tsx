import { Navigate, useParams } from "react-router-dom"
import GameRipple from "./MultiPlayer/Game/GameRipple"

function GetLink() {
  const { roomId, username } = useParams()
  sessionStorage.clear()

  sessionStorage.setItem("roomId", roomId as string)
  username && sessionStorage.setItem("player1Username", username as string)
  Navigate({
    to: "/multiplayer",
    replace: true,
  })

  return <GameRipple />
}

export default GetLink
