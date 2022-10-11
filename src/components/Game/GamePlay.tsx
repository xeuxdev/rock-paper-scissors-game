// Randomize array option for bot

const randomOption = (arr: any) => Math.floor(Math.random() * arr.length)

// Logic for the winner of the game

const whoWinsTheGame = (player: any, bot: any) => {
  const result =
    player === "rock" && bot === "paper"
      ? "YOU LOSE"
      : player === "rock" && bot === "scissors"
      ? "YOU WIN"
      : player === "rock" && bot === "rock"
      ? "TIE"
      : player === "paper" && bot === "paper"
      ? "TIE"
      : player === "paper" && bot === "scissors"
      ? "YOU LOSE"
      : player === "paper" && bot === "rock"
      ? "YOU WIN"
      : player === "scissors" && bot === "paper"
      ? "YOU WIN"
      : player === "scissors" && bot === "scissors"
      ? "TIE"
      : player === "scissors" && bot === "rock"
      ? "YOU LOSE"
      : undefined
  return result
}

export { randomOption, whoWinsTheGame }
