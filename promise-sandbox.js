const { reject } = require("lodash");
const { resolve } = require("path");

let done = true;

const isItDone = new Promise(
    (resolve, reject) => {
        if (done) {
            const result = "here is the result!";
            resolve(result);
        }else{
            const result = "still not done!";
            reject(result);
        }
    }
);

// Using the created promise
var checkIfDone = () => {
    isItDone.then((ok) => {
        console.log(ok);
    })
    .catch((error) => {
        console.log(error);
    })
};

checkIfDone();