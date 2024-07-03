let inputNumber = document.getElementById("inputNumber")
let buttons = document.getElementsByClassName("btn")


//console.log(buttons);

for (let index = 0; index < buttons.length; index++) {
  //console.log(buttons[index]);
  buttons[index].addEventListener('click', event => {
    
    let btnTitle = event.target.innerText
    console.log(btnTitle);
    inputNumber.value += btnTitle
    // inputNumber.value = inputNumber.value + btnTitle
  })
}

function getResult(){
    return eval(inputNumber.value)
}