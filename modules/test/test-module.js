const testModule = {
    param1: 0,
    param2: 'somestring',
    param3: [0, 1, 2, 3]
}

// One way to export is to use module.exports to export
// one object or function as the library only functionality
module.exports = testModule;