var emailLink = document.getElementsByClassName('icon-email')[0]
console.log(emailLink)
emailLink.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Hello in the console! ')
    alert('Hello ! ')
})
