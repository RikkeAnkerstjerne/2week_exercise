// Functions & objects //
// First name and last name //
function firstName() {
    console.log('Rikke');
}
function lastName(){
    console.log('Ankerstjerne')
}
firstName()
lastName()

// Calculate //
// Triangle //
function sum(b, c, d){
    console.log(b*c*d)
}
sum(0.5, 4, 3)

// Speed //
function calculateKm(speed, time){
    return speed*time;
}

const speed = 30;
const time = 1;

const distance = calculateKm(speed, time);

console.log(`You have travelled ${distance} km`);

// calculator //
let calculator = {ownersName: "Rikke Ankerstjerne", sum, calculateKm, firstName, lastName}

console.log(calculator.calculateKm(30,1))
calculator.sum(0.5, 4, 3)
calculator.firstName()
calculator.lastName()

// Class - Create a cat (dog) class//
import { dog } from "./dog.js";

const dog1 = new dog("Luna", "brown", "dalmatian")
console.log(dog1.getData())
dog1.changeName("Klara") 
console.log(dog1.getData()) 

// Show / Hide //
const messageButton = document.getElementById("messageButton")
console.log(messageButton)

const message = document.getElementById("message")
console.log(message)

const list = message.classList;
messageButton.addEventListener("mouseover", function(){
    list.add("visible")
    list.remove("hidden")
})
messageButton.addEventListener("mouseout", function(){
    list.add("hidden")
    list.remove("visible")
})


// Loops and if else //
const array = ["Peter", 7, "Marianne", true, "Helle", 8]

for (const x of array){ 
    console.log(`${x} is a ${typeof x}`)
}
// different way //
for (const x of array){ 
    console.log(x + " is a" + typeof x)
    if (typeof x==="string"){
        console.log(`${x} is a string`)
    }
    if (typeof x==="number"){
        console.log(`${x} is a number`)
    }
    if (typeof x==="boolean"){
        console.log(`${x} is a boolean`)
    }
}

// loops and objects //

const books = [{
    title:"Harry Potter",
    author:"J.K. Rowling"
},{
    title:"The Hobbit",
    author:"J.R.R. Tolkien"
},{
    title:"To Kill a Mockingbird",
    author:"Harper Lee"
},{
    title:"1984",
    author:"George Orwell"
},{
    title:"Moby Dick",
    author:"Herman Melville"
}]

const booksList=document.getElementById("booksList")
console.log(booksList)

for (const book of books){
    const li = document.createElement("li")
    const bookText = (`"${book.title}" by ${book.author}`)
    li.innerText = bookText
    booksList.appendChild(li)
}

// Find largest number //

const findLargest = (number1, number2, number3, number4) => {
    let largest = number1 
    if (number2 > largest){
        largest = number2
    }
    if (number3 > largest){
        largest = number3
    }
    if (number3 > largest){
        largest = number4
    }
    return largest
}

console.log(findLargest(45, 3, 7, 13))

// Check within range //

const check = (6, 3, 8) 

