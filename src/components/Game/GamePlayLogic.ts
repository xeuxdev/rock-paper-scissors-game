// Randomize array option for bot

const randomOption = (arr: string[]) => Math.floor(Math.random() * arr.length)

// Logic for the winner of the game

const whoWinsTheGame = (player: string, bot: string) => {
  const result =
    player === bot
      ? "It's A TIE"
      : (player === "rock" && bot === "scissors") ||
        (player === "paper" && bot === "rock") ||
        (player === "scissors" && bot === "paper")
      ? "YOU WIN"
      : "YOU LOSE"
  return result
}

export { randomOption, whoWinsTheGame }
