// ASCII for random data
// 48-57 for numbers 0 to 9.
// 65-90 for Uppercase A to Z.
// 97-122 for Lowercase a to z.



const restultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowecaseEl = document.getElementById("lowercase")
const numberEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}


clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = restultEl.innerText;

  if (!password) return

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove()
  alert('Password has been copied to clipboard!')
})


generateEl.addEventListener('click', () => {
  const length = +lengthEl.value; // + will parse the string into number
  const hasLower = lowecaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbols = symbolsEl.checked;

  restultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length)

})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(v => Object.values(v)[0]);
  // Object.values gives the array of values, in above case we only have one value in each object that is why we are using Object.values(v)[0]....and it return true or false, and on the basis of true and false filter function returns only those objects whose value is true.


  if (typesCount === 0) return ''

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunction[funcName]()
    })
  }
  console.log(generatedPassword.length)
  return generatedPassword.slice(0, length);
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

