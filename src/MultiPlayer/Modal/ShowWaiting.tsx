import React, { useContext } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"

function ShowWaiting({
  setShowWaiting,
}: {
  setShowWaiting: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { socket } = useContext(MultiPlayerGameContext)

  socket.on("received_choice", (data) => {
    console.log(data)
  })
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-bg_gradient_2 opacity-30"></div>
      <div className="fixed inset-0 max-w-md w-[90%] sm:w-full h-fit py-7 px-5 m-auto bg-white rounded-md text-center flex items-center flex-col">
        Waiting for player
      </div>
    </>
  )
}

export default ShowWaiting
