import { createContext, useState } from "react"

//types for variables and values that reside in context
type MultiPlayerGameContextType = {
  isModalOpen: boolean //toggles modal
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>> //modal toggler
  handleModalToggle: () => void //function to handle toggle
  playerScore: number
  setPlayerScore: React.Dispatch<React.SetStateAction<number>>
  player2Score: number
  setPlayer2Score: React.Dispatch<React.SetStateAction<number>>
  playerChoice: string
  setPlayerChoice: React.Dispatch<React.SetStateAction<string>>
  player2Choice: string
  setPlayer2Choice: React.Dispatch<React.SetStateAction<string>>
  gameResult: string | undefined
  setGameResult: React.Dispatch<React.SetStateAction<string | undefined>>
}
//type for children
type GameContextProviderType = {
  children: React.ReactNode
}

//context creation, assigning types to created context
export const MultiPlayerGameContext = createContext<MultiPlayerGameContextType>(
  {} as MultiPlayerGameContextType
)

//provoder for context wrapper that wrapes entire application
const MultiPlayerGameContextProvider = ({
  children,
}: GameContextProviderType) => {
  const [isModalOpen, setisModalOpen] = useState(false) //state for toggling modal
  const [playerScore, setPlayerScore] = useState<number>(
    JSON.parse(`${localStorage.getItem("multi-playerScore")}`) ?? 0
  ) //gets score from local stroage if score is null or undefined return 0
  const [player2Score, setPlayer2Score] = useState<number>(
    JSON.parse(`${localStorage.getItem("multi-player2Score")}`) ?? 0
  ) //gets score from local stroage if score is null or undefined return 0
  const [playerChoice, setPlayerChoice] = useState("") //state for setting player choice
  const [player2Choice, setPlayer2Choice] = useState("")
  const [gameResult, setGameResult] = useState<string | undefined>("")
  const handleModalToggle = () => setisModalOpen((prev) => !prev) //toggles state here

  return (
    <MultiPlayerGameContext.Provider //context provider for the entire app it wrappes
      value={{
        isModalOpen,
        setisModalOpen,
        handleModalToggle,
        playerChoice,
        setPlayerChoice,
        player2Choice,
        setPlayer2Choice,
        playerScore,
        setPlayerScore,
        player2Score,
        setPlayer2Score,
        gameResult,
        setGameResult,
      }} //values in the context
    >
      {children}
    </MultiPlayerGameContext.Provider>
  )
}

export default MultiPlayerGameContextProvider
