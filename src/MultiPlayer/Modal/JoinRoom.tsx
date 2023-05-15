import { useState, useContext, useEffect } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"
import { toast } from "react-hot-toast"

function JoinRoom({
  roomId,
  setOpenJoinRoom,
}: {
  roomId: string
  setOpenJoinRoom: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { socket, setPlayerName, setPlayer2Name } = useContext(
    MultiPlayerGameContext
  )
  const [userName, setUserName] = useState("")

  const player1Username = sessionStorage.getItem("player1Username") ?? ""

  useEffect(() => {
    player1Username !== "" && setPlayerName(player1Username)

    setPlayer2Name(userName)
    sessionStorage.setItem("player2Username", userName)

    // sessionStorage.getItem("player1Username") && setOpenJoinRoom(false)
  }, [player1Username, userName])

  const startGame = () => {
    console.log(roomId)

    socket.emit(
      "join_room",
      {
        roomId,
        username: userName,
      },
      (msg: string) => {
        // console.log(msg)
        toast(msg)
      }
    )

    sessionStorage.setItem("joined", "true")

    setOpenJoinRoom(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    startGame()
  }

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-bg_gradient_2 opacity-30"></div>
      <div className="fixed inset-0 max-w-md w-[90%] sm:w-full h-fit py-7 px-5 m-auto bg-white rounded-md text-center flex items-center flex-col">
        <header className="text-base mb-6">Click below to join link</header>

        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter username"
            id="username"
            className="w-full h-11 rounded-md border border-Header hover:border-2 focus:border-2 px-5"
            min={3}
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg  duration-300 hover:bg-Header hover:border-white hover:text-white z-30">
            Play
          </button>
        </form>
      </div>
    </>
  )
}

export default JoinRoom
