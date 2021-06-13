// ASCII for random data
// 48-57 for numbers 0 to 9.
// 65-90 for Uppercase A to Z.
// 97-122 for Lowercase a to z.

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // this will generate random Lowercase letters from a to z
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65) // this will generate random Uppercase letters from A to Z
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48) // this will generate random numbers
}

// I am going to use a perticular set of symbols
function getRandomSymbol() {
  let symbols = "!@#$%^&*()_+-[]{}/.,<>"
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// console.log(getRandomLower())
// console.log(getRandomUpper())
// console.log(getRandomNumber())
console.log(getRandomSymbol())