//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function Display(person) {
    console.log(Object.values(person))
}

console.log(Display(person3))

//=======Exercise #2=========//
/*
Write a Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo = () => {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }

    increaseAge = () => {
        this.age++
        return `${this.name}'s age = ${this.age}`
    }

    increaseAgeByThree = () => {
        this.age += 3
        return `${this.name}'s age= ${this.age}`
    }


}

const person1 = new Person('Emma', 24)
const person2 = new Person('Dylan', 100)
console.log(person1.printInfo())
console.log(person2.printInfo())
console.log(person1.increaseAge())
console.log(person2.increaseAgeByThree())

//Codewars:

// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?In this simple assignment you are given a number 
// and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num >= 0){
    return num * -1 
  }else {
    return num * 1
  }
}

console.log(makeNegative(10))

// Very simple, given an integer or a floating-point number, find its opposite.


function opposite(number) {
  if (number >= 0){
    return number * -1
  } else if(number < 0){
    return number * -1
  } 
}

console.log(opposite(-5))
