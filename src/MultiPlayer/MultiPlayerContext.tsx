import { createContext, useState, useEffect } from "react"
import { Socket, io } from "socket.io-client"

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
  socket: Socket
  playerName: string
  setPlayerName: React.Dispatch<React.SetStateAction<string>>
  player2Name: string
  setPlayer2Name: React.Dispatch<React.SetStateAction<string>>
}
//type for children
type GameContextProviderType = {
  children: React.ReactNode
}

//context creation, assigning types to created context
export const MultiPlayerGameContext = createContext<MultiPlayerGameContextType>(
  {} as MultiPlayerGameContextType
)

// export const socket = io("http://localhost:3000")
export const socket = io("https://rps-game-ekn0.onrender.com")

//provoder for context wrapper that wrapes entire application
const MultiPlayerGameContextProvider = ({
  children,
}: GameContextProviderType) => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [playerScore, setPlayerScore] = useState<number>(
    JSON.parse(`${localStorage.getItem("multi-playerScore")}`) ?? 0
  )
  const [player2Score, setPlayer2Score] = useState<number>(
    JSON.parse(`${localStorage.getItem("multi-player2Score")}`) ?? 0
  )
  const [playerChoice, setPlayerChoice] = useState("")
  const [player2Choice, setPlayer2Choice] = useState("")
  const [gameResult, setGameResult] = useState<string | undefined>("")
  const handleModalToggle = () => setisModalOpen((prev) => !prev)
  const [playerName, setPlayerName] = useState("")
  const [player2Name, setPlayer2Name] = useState("")

  // inti socket

  useEffect(() => {
    const connect = () => {
      socket.on("connect", () => console.log(socket.id))
    }

    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000)
    })

    return () => {
      connect()
    }
  }, [])

  useEffect(() => {
    console.log(player2Choice, "player2Choice")
    console.log(playerChoice, "playerChoice")
  }, [player2Choice, playerChoice])

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
        socket,
        player2Name,
        playerName,
        setPlayer2Name,
        setPlayerName,
      }} //values in the context
    >
      {children}
    </MultiPlayerGameContext.Provider>
  )
}

export default MultiPlayerGameContextProvider
