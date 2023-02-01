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
  let result = 0
  if(operation === '+') result = (num1 + num2)
  if(operation === 'x') result = (num1 * num2)
  if(operation === '-') result = (num1 - num2)
  if(operation === '÷') result = (num1 / num2)
  if(operation === '%') result = (num1 % num2)
  if(result.toString().length > 5) {
    return result.toFixed(2)
  }
  return result
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
  const res = operate(arr[0],operation,arr[1])
  if(res === Infinity) {
    result.textContent = 'Math Error'
    setTimeout(() => {
      result.textContent = '0'
    }, 1000);
  } else {
    result.textContent = res
  }
  arr = []
  operation = ''
  if(result.textContent !== 'Math Error') num = result.textContent
  console.log(num);
}

function deleteDigit () {
  const resultArr = result.textContent.split('')
  const numArr = num.split('')
  resultArr.pop()
  numArr.pop()
  num = numArr.join('');
  result.textContent = resultArr.join('');
  if(resultArr.length < 1) {
    clearAll()
  }
}

function clearAll () {
  arr = []
  operation = ''
  num = '';
  result.textContent = '0'
}