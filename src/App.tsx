import GameContextProvider from "./components/contexts/GameContext"
import { Header, GameDefault, ModalOpen } from "./components/index"
import Modal from "./components/Modal/Modal"

function App() {
  return (
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 ">
        <Header />
        <GameDefault />
        <Modal />
        <ModalOpen />
      </div>
    </GameContextProvider>
  )
}

export default App
