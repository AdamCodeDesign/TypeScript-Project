//void

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printSome(num: number) {
  console.log("result: " + num);
}

printSome(add(5, 23));

//function as type

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log("combineValues: ", combineValues(10, 23));

//callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(20, 40, (result) => {
  console.log('addAndHAndle: ',result);
});

//never type

function generateError(message:string, code:number){
    throw {message:message, errorCode:code}
}

generateError("Wrong player name", 500)