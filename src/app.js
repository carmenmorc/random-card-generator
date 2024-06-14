window.onload = function() {
  document.querySelector(".card").classList.add(GenerateRandomSuit());
  document.querySelector(".number").innerHTML = GenerateRandomNumber();

  function GenerateRandomNumber() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);

    return numbers[indexNumbers];
  }

  function GenerateRandomSuit() {
    let suit = ["diamond", "heart", "spade", "club"];
    let indexSuit = Math.floor(Math.random() * suit.length);

    return suit[indexSuit];
  }
};
