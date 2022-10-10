import GameContextProvider from "./components/contexts/GameContext"
import {
  Header,
  GameDefault,
  ModalOpen,
  Modal,
  GamePlay,
  GameResults,
} from "./components/index"

function App() {
  return (
    // provider for context
    <GameContextProvider>
      <div className="container p-7 md:p-9  lg:p-11 min-h-screen  ">
        <Header />
        {/* <GameDefault /> */}
        {/* <GamePlay /> */}
        <GameResults />
        <ModalOpen />
        <Modal />
      </div>
    </GameContextProvider>
  )
}

export default App
