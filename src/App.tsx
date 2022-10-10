import { Header, GameDefault } from "./components/index"

function App() {
  return (
    <div className="container p-7 md:p-9  lg:p-11 ">
      <Header />
      <GameDefault />
      <button
        className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[90%] uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg mb-10 hover:text-white duration-300 hover:border-white"
        aria-label="show Rules"
      >
        Rules
      </button>
    </div>
  )
}

export default App
