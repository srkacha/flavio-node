//Importing the modules
const testModule = require('./modules/test/test-module');
const getObjectParameter = require('./modules/test/test-module-mul').getObjParam;
const setObjectParameter = require('./modules/test/test-module-mul').setObjParam;


//Testing the object access for test module 
console.log(testModule.param1);
console.log(testModule.param2);

// Testing getter and setter from other test module
setObjectParameter(1, 2, 22);
console.log(getObjectParameter(1,2));

try{
    setObjectParameter(3,3,123);
}catch(error){
    console.log(error);
}