import { useEffect, useState } from "react"
import MultiPlayerGameContextProvider from "./MultiPlayer/MultiPlayerContext"
import Header from "./MultiPlayer/Header/Header"
import Game from "./MultiPlayer/Game/Game"
import Reset from "./MultiPlayer/Reset/Reset"
import Modal from "./MultiPlayer/Modal/Modal"
import ModalOpen from "./MultiPlayer/Modal/ModalOpen"
import CreateRoom from "./MultiPlayer/Modal/CreateRoom"
import JoinRoom from "./MultiPlayer/Modal/JoinRoom"

function MultiPlayerApp() {
  const [roomId, setRoomId] = useState(localStorage.getItem("roomId") ?? "")
  const [openCreateRoom, setOpenCreateRoom] = useState(true)
  const [openJoinRoom, setOpenJoinRoom] = useState(false)

  useEffect(() => {
    if (roomId || roomId !== "") {
      setOpenJoinRoom(true)
      setOpenCreateRoom(false)
    } else {
      setOpenCreateRoom(true)
      setOpenJoinRoom(false)
    }

    if (roomId !== "" && localStorage.getItem("joined") == "true") {
      setOpenJoinRoom(false)
    }
  }, [roomId])

  useEffect(() => {
    if (
      roomId !== "" &&
      localStorage.getItem("creator") == "true" &&
      localStorage.getItem("player1Username") !== ""
    ) {
      setOpenJoinRoom(false)
      setOpenCreateRoom(false)
    }
  }, [openCreateRoom, roomId])

  return (
    <MultiPlayerGameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 min-h-screen overflow-x-hidden">
        <Header />
        <Game />

        <Modal />
        <div className="flex items-center justify-center gap-10 mt-20 w-full max-w-sm mx-auto md:mt-14 lg:mt-9">
          <Reset />
          <ModalOpen />
        </div>

        <div>
          {openJoinRoom && (
            <JoinRoom roomId={roomId} setOpenJoinRoom={setOpenJoinRoom} />
          )}
          {openCreateRoom && (
            <CreateRoom setOpenCreateRoom={setOpenCreateRoom} />
          )}
        </div>
      </div>
    </MultiPlayerGameContextProvider>
  )
}

export default MultiPlayerApp
