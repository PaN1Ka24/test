function playGame(userChoice) {
  
  const computerChoices = ["камень", "ножницы", "бумага"];
  
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  let winner;
  if (userChoice === computerChoice) {
    winner = "Ничья";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    winner = "Вы";
  } else {
    winner = "Компьютер";
  }
  console.log(`Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}. Победитель: ${winner}`);
}
