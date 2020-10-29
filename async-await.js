const asyncFunction = () => {
    return new Promise((resolve) => {
        const message = "This is an async message!";
        setTimeout(() => {
            resolve(message);
        }, 3000);
    })
};

const triggerFunction = async () => {
    console.log(await asyncFunction());
}

console.log("Before call");
triggerFunction();
console.log("After call");