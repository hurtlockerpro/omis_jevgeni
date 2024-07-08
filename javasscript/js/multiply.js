let divMultiply = document.getElementById("multiply")

let rowCount = 10
let colCount = 10


let table = ''
let tr = ''
let td = ''
let th = '<th></th>'
let rh = ''

for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
    //console.log('rowIndex: ' + rowIndex);
    td = ''
    for (let colIndex = 1; colIndex <= colCount; colIndex++) {
        console.log('result: ' + element('td', rowIndex * colIndex).outerHTML);
        if (rowIndex == 1){
            th += element('th', colIndex).outerHTML
        }
        if (colIndex == 1)
        {
            rh = element('th', rowIndex)
            rh.setAttribute('scope', 'row')
            rh = rh.outerHTML
        } else {
            rh = ''
        }
        td += rh + element('td', rowIndex * colIndex).outerHTML
    }
    if (rowIndex == 1) tr += element('tr', th).outerHTML
    tr += element('tr', td).outerHTML
}

table = element('table', tr)
//table.classList.add('table', 'table-hover')//, 'table-dark')


divMultiply.innerHTML = table.outerHTML

/*
let newElement = document.createElement("div")
newElement.style.color = 'Red'
newElement.style.border = '2px solid green'
newElement.innerText = 'Hello New element'

divMultiply.innerHTML = newElement.outerHTML
*/

function element(tagName, content) {
    let newElement = document.createElement(tagName)
    newElement.innerHTML = content

    return newElement
}