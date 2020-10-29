const obj1 = {
    params: new Array(3)
}

const obj2 = {
    params: new Array(3)
}

var setObjParam = function(objIndex, paramIndex, paramVal){
    if (objIndex > 2) throw new Error("Object index must be 1 or 2");
    if (paramIndex > 3) throw new Error("Param index must be 0, 1 or 2");

    if (objIndex === 1){
        obj1.params[paramIndex] = paramVal;
    }else{
        obj2.params[paramIndex] = paramVal;
    }
} 

var getObjParam = function(objIndex, paramIndex){
    if (objIndex > 2) throw new Error("Object index must be 1 or 2");
    if (paramIndex > 3) throw new Error("Param index must be 0, 1 or 2");

    return  objIndex === 1? obj1.params[paramIndex]: obj2.params[paramIndex];
}

module.exports.setObjParam = setObjParam;
module.exports.getObjParam = getObjParam;