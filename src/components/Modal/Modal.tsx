import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { motion } from "framer-motion"

const Modal = () => {
  const modal = useContext(GameContext)
  return (
    <>
      {modal?.isModalOpen && (
        <motion.section
          className="fixed inset-0 backdrop-brightness-50 w-screen min-h-screen z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="bg-white rounded-xl w-full h-full md:w-[25rem] md:h-[25.9375rem]  p-8 grid place-items-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 }, x: 100 }}
          >
            <div className="flex items-center justify-between w-full">
              <p
                className="heading text-3xl text-dark_Text uppercase font-bold"
                aria-label="rules"
              >
                Rules
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="text-dark_Text hover:text-[black] cursor-pointer hidden md:flex"
                onClick={modal?.handleModalToggle}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                  opacity=".25"
                />
              </svg>
            </div>

            <img
              src="/assets/image-rules.svg"
              alt=""
              className="flex items-center justify-center"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="text-dark_Text hover:text-[black] cursor-pointer flex md:hidden"
              onClick={modal?.handleModalToggle}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                opacity=".25"
              />
            </svg>
          </motion.div>
        </motion.section>
      )}
    </>
  )
}

export default Modal
