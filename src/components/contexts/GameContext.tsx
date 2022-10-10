import { createContext, useState } from "react"

type GameContextType = {
  isModalOpen: boolean
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
type GameContextProviderType = {
  children: React.ReactNode
}

const GameContext = createContext<GameContextType | null>(null)

const GameContextProvider = ({ children }: GameContextProviderType) => {
  const [isModalOpen, setisModalOpen] = useState(false)
  return (
    <GameContext.Provider
      value={{ isModalOpen, setisModalOpen }}
    ></GameContext.Provider>
  )
}
