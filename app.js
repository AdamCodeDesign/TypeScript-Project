var person = {
    name: "Adam",
    age: 40,
    hobbies: ["game", "sport", "chess"],
};
console.log(person.hobbies[2]);
//union
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1 + input2;
    }
    return result;
}
var names = combine('Odo', 'Joanna');
var ages = combine(20, 50);
console.log(names);
console.log(ages);
