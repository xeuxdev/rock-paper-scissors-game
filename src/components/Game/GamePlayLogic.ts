// Randomize array option for bot

const randomOption = (arr: string[]) => Math.floor(Math.random() * arr.length)

// Logic for the winner of the game

const whoWinsTheGame = (player: string, bot: string) => {
  const result =
    // player === "rock" && bot === "paper" //checks for player == rock
    //   ? "YOU LOSE"
    //   : player === "rock" && bot === "scissors"
    //   ? "YOU WIN"
    //   : player === "rock" && bot === "rock"
    //   ? "It's A TIE"
    //   : player === "paper" && bot === "paper" //checls for player == paper
    //   ? "It's A TIE"
    //   : player === "paper" && bot === "scissors"
    //   ? "YOU LOSE"
    //   : player === "paper" && bot === "rock"
    //   ? "YOU WIN"
    //   : player === "scissors" && bot === "paper" //checks for player == scissors
    //   ? "YOU WIN"
    //   : player === "scissors" && bot === "scissors"
    //   ? "It's A TIE"
    //   : player === "scissors" && bot === "rock"
    //   ? "YOU LOSE"
    //   : undefined
    (player === "scissors" && bot === "scissors") ||
    (player === "paper" && bot === "paper") ||
    (player === "rock" && bot === "rock")
      ? "It's A TIE"
      : (player === "rock" && bot === "scissors") ||
        (player === "paper" && bot === "rock") ||
        (player === "scissors" && bot === "paper")
      ? "YOU WIN"
      : "YOU LOSE"
  return result
}

export { randomOption, whoWinsTheGame }
