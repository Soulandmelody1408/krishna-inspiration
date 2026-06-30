const quotes = [
  "Krishna fills my heart with peace and guides me on the path of love.",
  "Do your duty without expecting rewards. – Bhagavad Gita",
  "The soul is eternal; the body is temporary.",
  "Where there is Krishna, there is victory.",
  "Faith in Krishna removes all fear.",
  "Love Krishna with all your heart.",
  "Surrender to Krishna and find peace.",
  "Every day is a blessing from Krishna.",
  "Krishna's smile lights the darkest path.",
  "Trust Krishna's timing."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
