"use strict";
let user1;
user1 = {
    name: "David",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi! I am");
function count(element) {
    let text = "Got no value";
    if (element.length === 1) {
        text = "Got 1 element";
    }
    else if (element.length > 1) {
        text = "Got " + element.length + " elements";
    }
    return [element, text];
}
console.log('count: ', count('A'));
