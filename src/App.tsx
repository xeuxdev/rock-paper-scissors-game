import GameContextProvider from "./components/contexts/GameContext"
import { useState, useEffect } from "react"
import { Header, ModalOpen, Modal, Game, Reset } from "./components/index"
import PopUp from "./components/Modal/PopUp"

function App() {
  const [showPopUp, setShowPopUp] = useState(true)

  return (
    // provider for context
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 min-h-screen overflow-x-hidden">
        <Header />
        <Game />

        <Modal />
        <div className="flex items-center justify-center gap-10 mt-20 w-full max-w-sm mx-auto md:mt-14 lg:mt-9">
          <Reset />
          <ModalOpen />
        </div>
      </div>
      {showPopUp && <PopUp setShowPopUp={setShowPopUp} />}
    </GameContextProvider>
  )
}

export default App
