import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { Modal, ModalOpen } from "./components"
import MultiPlayerGameContextProvider from "./MultiPlayer/MultiPlayerContext"
import Header from "./MultiPlayer/Header/Header"
import Game from "./MultiPlayer/Game/Game"
import Reset from "./MultiPlayer/Reset/Reset"

function MultiPlayerApp() {
  const [roomId, setRoomId] = useState("")
  //   const socket = io("http://localhost:3000")

  //   useEffect(() => {
  //     socket.on("connect", () => console.log(socket.id))
  //     socket.on("connect_error", () => {
  //       setTimeout(() => socket.connect(), 5000)
  //     })
  //   }, [])
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
      </div>
    </MultiPlayerGameContextProvider>
  )
}

export default MultiPlayerApp
