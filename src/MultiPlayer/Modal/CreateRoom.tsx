import React, { useState, useEffect, useContext } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"

type Props = {
  setOpenCreateRoom: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateRoom({ setOpenCreateRoom }: Props) {
  const { socket, setPlayerName } = useContext(MultiPlayerGameContext)
  const [roomLink, setRoomLink] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const [userName, setUserName] = useState("")

  const generateRoomLink = () => {
    const randomString = crypto.randomUUID().replace(/-/g, "")
    console.log(randomString)
    setRoomLink(
      `https://rps-game-et-moi.netlify.app/multiplayer/${randomString}/${userName}`
    )
    localStorage.setItem("roomId", randomString)
    localStorage.setItem("player1Username", userName)
    localStorage.setItem("creator", "true")

    socket.emit(
      "join_room",
      {
        roomId: randomString,
        username: userName,
      },
      (msg: string) => {
        console.log(msg)
      }
    )
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(roomLink).then(() => {
      setIsCopied(true)
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied])

  const roomId = localStorage.getItem("roomId") ?? ""

  useEffect(() => {
    let timeout = 0

    if (roomId !== "") {
      timeout = setTimeout(() => {
        setOpenCreateRoom(false)
      }, 10000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [roomId])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // console.log(userName)
    generateRoomLink()
    setPlayerName(userName)
  }

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-bg_gradient_2 opacity-30"></div>
      <div className="fixed inset-0 max-w-md w-[90%] sm:w-full h-fit py-7 px-5 m-auto bg-white rounded-md text-center flex items-center flex-col">
        <header className="text-base">
          Create a link to share to your opponent
        </header>

        {roomLink !== "" && (
          <div className="my-5 flex items-center flex-col">
            <p>Copy the link below and share to your opponent</p>
            <button
              className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg  duration-300 hover:bg-Header hover:border-white hover:text-white z-30"
              onClick={() => handleCopyLink()}
            >
              {isCopied ? "Copied" : "copy link"}
            </button>
          </div>
        )}

        <div className="mt-4 w-full">
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
              Create Link
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateRoom
