import { createContext, useState } from "react"

type GameContextType = {
  isModalOpen: boolean
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleModalToggle: () => void
}
type GameContextProviderType = {
  children: React.ReactNode
}

export const GameContext = createContext<GameContextType | null>(null)

const GameContextProvider = ({ children }: GameContextProviderType) => {
  const [isModalOpen, setisModalOpen] = useState(false)
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
