"use strict";
const test = "to jest test 4";
const map = new Map();
map.set("name", "Adam");
map.set("age", 40);
map.set("pkt", 40);
map.set("hobby", "UI/UX");
map.set("car", "suzuki");
console.log(map);
const array = [];
let filtered = [];
for (let value of map.values()) {
    array.push(value);
}
filtered = array.filter((el) => typeof el === 'number' && el === 40);
console.log(filtered);
