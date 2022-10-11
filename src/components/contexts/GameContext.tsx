import { createContext, useState } from "react"

//types for variables and values that reside in context
type GameContextType = {
  isModalOpen: boolean //toggles modal
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>> //modal toggler
  handleModalToggle: () => void //function to handle toggle
  playerChoice: string
  setPlayerChoice: React.Dispatch<React.SetStateAction<string>>
  aiChoice: string
  setAiChoice: React.Dispatch<React.SetStateAction<string>>
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
  const [playerChoice, setPlayerChoice] = useState<string>("") //state for setting player choice
  const [aiChoice, setAiChoice] = useState("")
  const handleModalToggle = () => setisModalOpen((prev) => !prev) //toggles state here

  return (
    <GameContext.Provider //context provider for the entire app it wrappes
      value={{
        isModalOpen,
        setisModalOpen,
        handleModalToggle,
        playerChoice,
        setPlayerChoice,
        aiChoice,
        setAiChoice,
      }} //values in the context
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
