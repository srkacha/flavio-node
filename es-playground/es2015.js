// Playing around with var

// Hoisting example
var test = function(){
    a = 5

    console.log(a)

    var a = 10

    console.log(a)
}

test()

// Const variables
const a = 'const string'

var test2 = function(){
    // a = 10 // cant do this cause const is global scope
    console.log(a)
}

test2()

// Arrow functions 
const oldFunction = function(){ return 'old function'}
const newFunction = () => { return 'new function'}

// this keyword in arrow functions
const car = {
    model: 'Fiesta',
    man: 'Ford',
    fullName: function(){
        return `${this.man} ${this.model}`
    }
}

console.log('Car one name: ' + car.fullName());

const car2 = {
    model: 'Golf',
    man: 'Volkswagen',
    fullName: () => {
        // This wont work cause arrow functions do not bind to the object
        // Arrow functions are not suited for object functions
        return `${this.man} ${this.model}`
    }
}

console.log('Car two name: ' + car2.fullName());

// Classes
class Car {
    constructor(manufacturer, model, year){
        this.manufacturer = manufacturer
        this.model = model
        this.year = year
    }

    info(){
        return `Manufacturer: ${this.manufacturer}\n` +
               `Model: ${this.model}\n` +
               `Year: ${this.year}\n`
    }
}

let newCar = new Car('Audi', 'A6', 2005)
// If we define only getters explicitly, we can not set values
// If we do not define anything, then we can set without a setter
// newCar.model = 'A3 Sportback'
console.log(newCar.info())

// Class inheritance
class ExtremeCar extends Car{
    info(){
        return super.info() + `Car type: Extreme`
    }
}

let newExtremeCar = new ExtremeCar('Jeep', 'Grand Cherokee', 2020);
console.log(newExtremeCar.info());

// Default parameteres testing
// ES6 introduces default parameters for functions
const sayHi = (name = 'Human') => {
    console.log(`Hi there, ${name}`)
}

sayHi();
sayHi('Jova');

// Template literals
const some = `Hey
my
name
is 
jova`
console.log(some)

// Variable deconstructing, from objects to variables
const person = {
    firstName: 'Srdjan',
    lastName: 'Jovic',
    age: 15,
    student: true,
}

const {firstName: name, age} = person
console.log(name, ' ', age)

// for of loop
const arr = [1,2,3,4,5]

for (const e of arr){
    console.log(e)
}

// The spread operator
const a2 = [1, 2, 3, 4, 5, 6]
const b = [...a2, 7, 8]
const c = [...b]
const word = 'sdfkjdslgk'
const letters = [...word];

// we can iterate letters like this
for (const letter of [...word]){
    console.log(letter);
}