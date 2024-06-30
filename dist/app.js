"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printSome(num) {
    console.log("result: " + num);
}
printSome(add(5, 23));
let combineValues;
combineValues = add;
console.log("combineValues: ", combineValues(10, 23));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(20, 40, (result) => {
    console.log('addAndHAndle: ', result);
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Wrong player name", 500);
