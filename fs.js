const fs = require('fs');
const path = require('path');
const filesPath = './files/';
const fileName = 'test.txt';

// Testing the fs features
try{
    if(!fs.existsSync(filesPath)){
        fs.mkdirSync(filesPath);
    }
    let fd = fs.openSync(filesPath + fileName, 'w+');
    let fileStats = fs.statSync(filesPath + fileName);

    // Printing file stats
    console.log(`Is file? - ${fileStats.isFile()}`);
    console.log(`File size - ${fileStats.size}`);
    console.log(`File name - ${fileStats.fileName}`);
    fs.closeSync(fd);
}catch(error){
    console.log(error);
}

// File paths
console.log('File path stats:');
console.log(`Parent folder of a path: ${path.dirname(filesPath + fileName)}`);
console.log(`Base file name of the path: ${path.basename(filesPath + fileName)}`);
console.log(`File extension: ${path.extname(filesPath + fileName)}`);
console.log(`Absolute file path: ${path.resolve(filesPath + fileName)}`);

// Writing to a file
const content = 'Some content to write\n';
try{
    let fd = fs.openSync(filesPath + fileName, 'w+');
    fs.writeFileSync(fd, content);
    fs.closeSync(fd);
}catch(error){
    //TODO
    console.log(error);
}

// Reading from a file
var data = null;
try{
    let fd = fs.openSync(filesPath + fileName, 'r');
    data = fs.readFileSync(fd);
    console.log(`Read data: ${data}`);
    fs.closeSync(fd);
}catch(error){
    // TODO
    console.log(error);
}

// Working with folders
const isFile = function(fileName){
    return fs.lstatSync(fileName).isFile();
}

let allFilesAndDirs = fs.readdirSync('.');
console.log(`All files in the parent dir: ${allFilesAndDirs}`);
let onlyFiles = fs.readdirSync('.').map((fileName) => {
    return path.join('.', fileName);
}).filter(isFile);
console.log(`Only files: ${onlyFiles}`);