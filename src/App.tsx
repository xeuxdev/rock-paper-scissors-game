import { AnimatePresence } from "framer-motion"
import { useContext } from "react"
import GameContextProvider, {
  GameContext,
} from "./components/contexts/GameContext"
import { Header, ModalOpen, Modal, Game } from "./components/index"
import Reset from "./components/Reset/Reset"

function App() {
  const game = useContext(GameContext)

  return (
    // provider for context
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 min-h-screen">
        <Header />
        <Game />
        <ModalOpen />
        <Reset />
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
