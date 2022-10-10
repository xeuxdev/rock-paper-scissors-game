import { createContext, useState } from "react"

//types for variables and values that reside in context
type GameContextType = {
  isModalOpen: boolean //toggles modal
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>> //modal toggler
  handleModalToggle: () => void //function to handle toggle
}
//type for children
type GameContextProviderType = {
  children: React.ReactNode
}

//context creation, assigning types to created context
export const GameContext = createContext<GameContextType | null>(null)

//provoder for context wrapper that wrapes entire application
const GameContextProvider = ({ children }: GameContextProviderType) => {
  const [isModalOpen, setisModalOpen] = useState(false) //state for toggling modal
  const handleModalToggle = () => {
    //function for toggling state
    setisModalOpen((prev) => !prev) //toggles state here
  }
  return (
    <GameContext.Provider //context provider for the entire app it wrappes
      value={{ isModalOpen, setisModalOpen, handleModalToggle }} //values in the context
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
