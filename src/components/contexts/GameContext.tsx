import { createContext, useState } from "react"

//types for variables and values that reside in context
type GameContextType = {
  isModalOpen: boolean //toggles modal
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>> //modal toggler
  handleModalToggle: () => void //function to handle toggle
  playerScore: string | null
  setPlayerScore: React.Dispatch<React.SetStateAction<string | null>>
  aiScore: string | null
  setAiScore: React.Dispatch<React.SetStateAction<string | null>>
  playerChoice: string
  setPlayerChoice: React.Dispatch<React.SetStateAction<string>>
  aiChoice: string
  setAiChoice: React.Dispatch<React.SetStateAction<string>>
  gameResult: string | undefined
  setGameResult: React.Dispatch<React.SetStateAction<string | undefined>>
}
//type for children
type GameContextProviderType = {
  children: React.ReactNode
}

//context creation, assigning types to created context
export const GameContext = createContext<GameContextType>({} as GameContextType)

//provoder for context wrapper that wrapes entire application
const GameContextProvider = ({ children }: GameContextProviderType) => {
  const [isModalOpen, setisModalOpen] = useState(false) //state for toggling modal
  const [playerScore, setPlayerScore] = useState(
    JSON.parse(localStorage.getItem("playerScore")) ?? 0
  ) //gets score from local stroage if score is null or undefined return 0
  const [aiScore, setAiScore] = useState(JSON.parse(localStorage.getItem("aiScore")) ?? 0) //gets score from local stroage if score is null or undefined return 0
  const [playerChoice, setPlayerChoice] = useState<string>("") //state for setting player choice
  const [aiChoice, setAiChoice] = useState("")
  const [gameResult, setGameResult] = useState<string | undefined>("")
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
        playerScore,
        setPlayerScore,
        aiScore,
        setAiScore,
        gameResult,
        setGameResult,
      }} //values in the context
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
