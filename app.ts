const person = {
  name: "Adam",
  age: 40,
  hobbies: ["game", "sport", "chess"],
};
console.log(person.hobbies[2]);

//union

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const names = combine('Adam', 'Joanna');
const ages = combine(20, 50);

console.log(names)
console.log(ages)

