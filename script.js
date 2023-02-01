const result = document.getElementById('result') // Result elements
const operations = document.getElementById('operations')

const numberButtons = document.querySelectorAll('.number') // Number elements
const operationButtons = document.querySelectorAll('.operation')
const equalsButton = document.getElementById('equals')


let arr = []
let num = ''
let operation;

function operate(num1, operation, num2) {
  if(operation === '+') return num1 + num2
  if(operation === 'x') return num1 * num2
  if(operation === '-') return num1 - num2
  if(operation === '÷') return num1 / num2
  if(operation === '%') return num1 % num2
}

let t = 0 // Find a better way to do this (Deleting zero if any number button is pressed)
numberButtons.forEach(item => {

  item.addEventListener('click', function(e) {
    t++
    if(t === 1) result.textContent = ''
    result.textContent += e.target.innerText
    num += e.target.innerText
  })

})

operationButtons.forEach(item => {
  item.addEventListener('click', function(e) {
    operation = e.target.innerText
    arr.push(Number(num))
    num = ''
    result.textContent +=  ` ${e.target.innerText } `
  })
})

equalsButton.addEventListener('click', () => {
  arr.push(Number(num))
  result.textContent = `${operate(arr[0],operation,arr[1])}`
  arr = []
  operation = ''
  num = result.textContent
  console.log(num);
})


