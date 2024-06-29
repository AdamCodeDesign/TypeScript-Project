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
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var names = combine('Adam', 'Joanna');
var ages = combine(20, 50);
console.log(names);
console.log(ages);
