import { useContext } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"

const ModalOpen = () => {
  const { handleModalToggle } = useContext(MultiPlayerGameContext) //imports context values
  return (
    <button
      className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg hover:text-white duration-300 hover:border-white z-30"
      aria-label="show Rules"
      onClick={handleModalToggle} ////when clicked call the handleModalToggle function
    >
      Rules
    </button>
  )
}

export default ModalOpen
