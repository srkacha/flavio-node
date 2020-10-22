//Trying out the console module

//Console log
let some_array = new Array(100).fill(0);
console.log(some_array);

//Formated printing 
let name = 'Jova';
let age = 24;

console.log('My name is %s and my age is %d', name, age);

//Calculating the time spent for some function
var uselessFunction = () => {
    let sum = 0;
    for (let i = 0; i < 10000; ++i){
        for (let j = 0; j < 10000; ++j){
            sum += i + j;
        }
    }
    console.log('The useless sum is: %d', sum);
}

console.time('Useless function');
uselessFunction();
console.timeEnd('Useless function');