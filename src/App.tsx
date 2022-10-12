import { AnimatePresence } from "framer-motion"
import GameContextProvider from "./components/contexts/GameContext"
import { Header, ModalOpen, Modal, Game, Reset } from "./components/index"

function App() {
  return (
    // provider for context
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 min-h-screen">
        <Header />
        <Game />
        <ModalOpen />

        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          <Modal />
        </AnimatePresence>
        <Reset />
      </div>
    </GameContextProvider>
  )
}

export default App
