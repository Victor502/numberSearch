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
readline.question(`Pick a number: `, number => {
  let recursiveFunction = (arr, x, start, end) => {
    // Base Condition
    if (start > end) return false
    // Find the middle index
    let middle = Math.floor((start + end) / 2)
    // Compare mid with given key x
    if (arr[middle] === x) return true
    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[middle] > x) return recursiveFunction(arr, x, start, middle - 1)
    // If element at mid is smaller than x,
    // search in the right half of mid
    else return recursiveFunction(arr, x, middle + 1, end)
  }
  if (recursiveFunction(numbers, parseInt(number), 0, numbers.length - 1))
    console.log(`Your number ${number}, was found`)
  else console.log(`Your number ${number}, was NOT found`)
  readline.close()
})
