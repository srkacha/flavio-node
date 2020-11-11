// String padding
const names = ['joe', 'john', 'david', 'jova', 'leon', 'gymakana']
const printPadded = (names) => {
    let lens = names.map(name => {return name.length})
    let maxLen = Math.max(...lens)  
    for (const name of names){
        console.log(name.padStart(maxLen))
    }
}

printPadded(names);

// Object values
const person = {
    firstName: 'Srdjan',
    lastName: 'Jovic',
    age: 24
}
for (const val of Object.values(person)){
    console.log(val)
}