// Randomize array option for bot

const randomOption = (arr: string[]) => Math.floor(Math.random() * arr.length)

// Logic for the winner of the game

const whoWinsTheGame = (player: string, player2: string) => {
  const result =
    player === player2
      ? "It's A TIE"
      : (player === "rock" && player2 === "scissors") ||
        (player === "paper" && player2 === "rock") ||
        (player === "scissors" && player2 === "paper")
      ? "YOU WIN"
      : "YOU LOSE"
  return result
}

export { randomOption, whoWinsTheGame }
