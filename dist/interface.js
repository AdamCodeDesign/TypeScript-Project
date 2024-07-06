"use strict";
let user1;
user1 = {
    name: "David",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet('Hi! I am');
