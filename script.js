const result = document.getElementById('result') // Result elements
const operations = document.getElementById('operations')

const numberButtons = document.querySelectorAll('.number') // Number elements
const operationButtons = document.querySelectorAll('.operation')

const clearButton = document.getElementById('clear');
const acButton = document.getElementById('ac');
const equalsButton = document.getElementById('equals');



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


numberButtons.forEach(item => {

  item.addEventListener('click', function(e) {

    if(result.textContent === '0' ) result.textContent = ''
    result.textContent += e.target.innerText
    num += e.target.innerText
    console.log(num);
  })

})

operationButtons.forEach(item => {
  item.addEventListener('click', function(e) {
    if(operation) { // If user try to do multiple calculations
      pushResult()
      } 
    operation = e.target.innerText
    arr.push(Number(num))
    num = ''
    result.textContent +=  ` ${e.target.innerText } `
    console.log(arr);
  })
})

equalsButton.addEventListener('click', () => {
  pushResult()
})

clearButton.addEventListener('click', () => {
  deleteDigit()
})

acButton.addEventListener('click', () => {
  clearAll()
})


function pushResult() {
  arr.push(Number(num))
  console.log(num);
  console.log(arr);
  result.textContent = `${operate(arr[0],operation,arr[1])}`
  arr = []
  operation = ''
  num = result.textContent
  console.log(num);
}

function deleteDigit () {
  const resultArr = result.textContent.split('')
  const numArr = num.split('')
  resultArr.pop()
  numArr.pop()
  num = numArr.join('');
  result.textContent = resultArr.join('');
}

function clearAll () {
  arr = []
  operation = ''
  num = '';
  result.textContent = '0'
}