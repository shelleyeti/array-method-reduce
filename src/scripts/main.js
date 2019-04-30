//Exercise 1: use reduce method to determin total rainfall per month
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

function getSum(total, num) {
  return total + num;
}

const totalRainfall = monthlyRainfall.reduce(getSum)

console.log(totalRainfall);



//Exercise 2: use reduce method to create a sentence
const words = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog"
];

function getSentence(total, num) {
  return total + " " + num;
}

const sentence = words.reduce(getSentence);

console.log(sentence);