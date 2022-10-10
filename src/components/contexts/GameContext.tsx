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
    setisModalOpen((prev) => !prev)
  }
  return (
    <GameContext.Provider
      value={{ isModalOpen, setisModalOpen, handleModalToggle }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
