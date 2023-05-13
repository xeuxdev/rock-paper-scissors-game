import React from "react"
import { Link } from "react-router-dom"
type Props = {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function PopUp({ setShowPopUp }: Props) {
  return (
    <>
      <div className="fixed inset-0 bg-bg_gradient_2 opacity-25"></div>
      <div className="fixed inset-0 w-[90%] sm:w-full max-w-sm max-h-52 m-auto bg-white backdrop-blur-sm grid place-items-center">
        <div className="max-w-sm flex items-center gap-10 flex-col">
          <p>How do you want to play</p>

          <div className="flex items-center gap-5">
            <Link
              to={"/multiplayer"}
              className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg hover:text-white duration-300 hover:border-white z-30"
            >
              Multiplayer
            </Link>
            <button
              className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg hover:text-white duration-300 hover:border-white z-30"
              onClick={() => setShowPopUp(false)}
            >
              Computer
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp
