import GameContextProvider from "./components/contexts/GameContext"
import {
  Header,
  GameDefault,
  ModalOpen,
  Modal,
  GamePlay,
} from "./components/index"

function App() {
  return (
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 ">
        <Header />
        {/* <GameDefault /> */}
        <GamePlay />
        <ModalOpen />
        <Modal />
      </div>
    </GameContextProvider>
  )
}

export default App
