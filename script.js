const result = document.getElementById('result') // Result elements
const operations = document.getElementById('operations')

const numberButtons = document.querySelectorAll('.number') // Number elements
const operationButtons = document.querySelectorAll('.operation')


let arr = [] // For storing nums
let num = ''
let operation;


numberButtons.forEach(item => { // Displaying digits on the screen and storing the numbers

  item.addEventListener('click', function(e) {

    if(result.textContent === '0' ) result.textContent = ''

    if(e.target.innerText === '.') { // Don't allow user to put multiple dots to number
      if(!result.textContent.includes('.')) {
        result.textContent += e.target.innerText
        num += e.target.innerText
      } 
    } else {
      result.textContent += e.target.innerText
      num += e.target.innerText

    }
    
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

  })
})


function operate(num1, operation, num2) { // Calculation function
  let result = 0
  if(operation === '+') result = num1 + num2
  if(operation === 'x') result = num1 * num2
  if(operation === '-') result = num1 - num2
  if(operation === '÷') result = num1 / num2
  if(operation === '%') result = num1 % num2
  if(result.toString().length > 5) {
    return result.toFixed(2)
  }
  return result
}

function pushResult() { // Equals button function
  arr.push(Number(num))
  const res = operate(arr[0],operation,arr[1])

  if(res === 'Infinity') { // If user try to Divide a number with zero 
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
}

function deleteDigit () { // C button function
  const resultArr = result.textContent.split('')
  const numArr = num.split('')
  resultArr.pop()
  numArr.pop()
  num = numArr.join('');
  result.textContent = resultArr.join('');
  if(resultArr.length < 1) {
    clearAll() // Preventing blank result 
  }
}

function clearAll () { // AC button function
  arr = []
  operation = ''
  num = '';
  result.textContent = '0'
}