import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"

const ModalOpen = () => {
  const modalContext = useContext(GameContext)
  return (
    <button
      className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[90%] uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg mb-10 hover:text-white duration-300 hover:border-white z-30 mt-6"
      aria-label="show Rules"
      onClick={modalContext?.handleModalToggle}
    >
      Rules
    </button>
  )
}

export default ModalOpen
