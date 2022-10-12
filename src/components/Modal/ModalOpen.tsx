import { useContext } from "react"
import { GameContext } from "../contexts/GameContext" //imports context and state

const ModalOpen = () => {
  const { handleModalToggle } = useContext(GameContext) //imports context values
  return (
    <button
      className="absolute bottom-0 left-2/4 md:left-[80%] uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg mb-10 hover:text-white duration-300 hover:border-white z-30 mt-6"
      aria-label="show Rules"
      onClick={handleModalToggle} ////when clicked call the handleModalToggle function
    >
      Rules
    </button>
  )
}

export default ModalOpen
