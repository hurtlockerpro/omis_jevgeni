let inputNumber = document.getElementById("inputNumber")
let buttons = document.getElementsByClassName("btn")

let exceptions = ['NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'NumpadAdd', 'Backspace']



//console.log(buttons);

for (let index = 0; index < buttons.length; index++) {
  //console.log(buttons[index]);
  buttons[index].addEventListener('click', event => {
    
    let btnTitle = event.target.innerText
    console.log(btnTitle);
    if (btnTitle == '='){
      getResult()
    } else if (btnTitle == 'CE'){
      emptyResult()
    }
    else 
    {
      inputNumber.value += btnTitle
    }
    // inputNumber.value = inputNumber.value + btnTitle
  })
}

function getResult(){
    inputNumber.value = eval(inputNumber.value)
}

function emptyResult(){
  inputNumber.value = '0'
}

// 0  1  2
// []
function multiply(x = 1, y = 1, ...z){ // 4! = 1*2*3*4 = 24
  
  console.log(z);

  let result = x * y

  for (let index = 0; index < z.length; index++) {
    result *= z[index]
    // result = result * z[index]
  }

  console.log(result);
  return result
}

// array functions


function divide_ (x, y){ // visibility
  return x / y
}

let divide = (x, y) => { // visibility
 
  if (y > 0){
   return x / y
  } else{
    return '"Y" must be greater than "0"'
  }

}

inputNumber.addEventListener('keydown', event =>  {

  if (event.shiftKey == true && event.code == 'equal')
  {
    console.log('OK');
  }
   //Digit1
   // KeyF
    if (event.code != 'Digit' + event.key && event.code != 'Numpad' + event.key) 
    {
      event.preventDefault() // <-
      console.log("Key is prevented");
    }
  
    console.log(event.code + ' - ' + event.key + ' - ' + event.keyCode);


})

/*
inputNumber.addEventListener('keydown', event =>  {
  console.log('keydown');
})

inputNumber.addEventListener('keypress', event =>  {
  console.log('keypress');
})
*/