import GameContextProvider from "./components/contexts/GameContext"
import { Header, GameDefault, ModalOpen, Modal } from "./components/index"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 ">
        <Header />
        <GameDefault />
        <ModalOpen />
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          <Modal />
        </AnimatePresence>
      </div>
    </GameContextProvider>
  )
}

export default App
