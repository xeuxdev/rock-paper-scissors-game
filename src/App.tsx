import { Header, GameDefault, ModalOpen } from "./components/index"

function App() {
  return (
    <div className="container p-7 md:p-9  lg:p-11 ">
      <Header />
      <GameDefault />
      <ModalOpen />
    </div>
  )
}

export default App
