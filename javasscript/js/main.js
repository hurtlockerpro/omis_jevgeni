
let x = 10 // number
let y  = "vladimir" // string
let b = true // boolean  true / false
let u = undefined 
let o = [] // object -> array
let o1 = {} // object -> array 

// concatenation
console.log("x=" + x);
console.log(x + "x=");
console.log(x + x); // 10 + 10


let firstname = "Vladimir"

console.log("Hello " + firstname);


console.log(typeof x); // "10" == 10
console.log(typeof "15");

// logic equalities

// ==    equal
// !=   not equal
// >=  grater than or equal
// <=  small than or equal


x = 11
//   true
// 10 == 15 -> false

// &&  - AND - u
// true && true && true -> true
// true && false && true -> false

// ||  - OR  - или
// false || false || true || false -> true
// false || false || false || false -> false
if (x == 15 && x == 11 && x == 12) {
    // 1
    console.log("yes x = " + x);

} else if (x == 10) {
    console.log("YEEEE x = 10");

} else {
    console.log("no, x = " + x);
}

/* ARRAYS */

//            0       1       2       3    4
let cars = ["audi", "bmw", "citroen", 10, true, undefined]

console.log("my car is: " + cars[1]);
console.log("items in array : " + cars.length); // chaning

cars[4] = 100

console.log(cars[4] + cars[2]);

// LOOPS

//                         true    6
// increment ++
// decrement --
//                                      index += 2
for (let index = 0; index < cars.length; index++) {
    //if (index % 2 == 0){
    /*
    if (cars[index] == "bmw"){
        console.log("This is great car. index = " + index );
        //console.log(cars[index]);
    } else {
        console.log("--- " + index);
    }*/

    if (typeof cars[index] != "string"){
        cars[index] = "car " + index
    }

    console.log(cars[index]);
}


// 1. 
let box = document.getElementById("box")
let btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
    console.log(event);

    box.style.animationName = 'CustomRotaion'
    box.style.animationDuration = '2s'
    box.style.animationIterationCount = 'infinite' // 1
})

btn.addEventListener("click", (event) => {
    if (event.ctrlKey == true){
        box.style.animationName = ''
    }
})

// arrow function -> callback

