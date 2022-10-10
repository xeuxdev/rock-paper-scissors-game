import { AnimatePresence } from "framer-motion"
import { useContext } from "react"
import GameContextProvider, {
  GameContext,
} from "./components/contexts/GameContext"
import { Header, ModalOpen, Modal, Game } from "./components/index"

function App() {
  const game = useContext(GameContext)

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
      </div>
    </GameContextProvider>
  )
}

export default App
