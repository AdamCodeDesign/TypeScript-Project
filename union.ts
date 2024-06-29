const person = {
  name: "Adam",
  age: 40,
  hobbies: ["game", "sport", "chess"],
};
console.log(person.hobbies[2]);

//union and aliases

type Combine = number | string // tworzę własny typ, to jest alias

function combine(input1: Combine , input2: Combine) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if(typeof input1 === "string" && typeof input2 === "string"){
    result = input1 + input2;
  }
  return result;
}
const names = combine('kiko', 'Joanna');
const ages = combine(20, 50);

console.log(names)
console.log(ages)

