// generate 100 random numbers save in array
var numbers = []
while (numbers.length < 100) {
  var n = Math.floor(Math.random() * 1000) + 1
  if (numbers.indexOf(n) === -1) numbers.push(n)
}
//sort the numbers ascending order
numbers.sort((a, b) => {
  return a - b
})
console.log(numbers)
// terminal input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})
// receives answer
readline.question(`Pick a number between 1 and 1000: `, number => {
  let recursiveFunction = (arr, x, start, end) => {
    // Base Condition
    if (start > end) return false
    // middle index
    let middle = Math.floor((start + end) / 2)
    // Compare middle with number
    if (arr[middle] === x) return true
    // search in the left half of middle
    if (arr[middle] > x) return recursiveFunction(arr, x, start, middle - 1)
    // search in the right half of middle
    else return recursiveFunction(arr, x, middle + 1, end)
  }
  if (recursiveFunction(numbers, parseInt(number), 0, numbers.length - 1))
    console.log(`Your number ${number}, was found`)
  else console.log(`Your number ${number}, was NOT found`)
  readline.close()
})
