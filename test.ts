const test = "to jest test 4";

const map = new Map();

map.set("name", "Adam");
map.set("age", 40);
map.set("pkt", 40);
map.set("hobby", "UI/UX");
map.set("car", "suzuki");

console.log(map);
const array: (string | number)[] = [];
let filtered: number[] = [];
for (let value of map.values()) {
  array.push(value);
}
filtered = array.filter(
  (el): el is number => typeof el === "number" && el === 40
);
console.log(filtered);

// button
const button = document.querySelector(".btn");
button?.addEventListener('click', () => {
    console.log("My name is Adam")
})

// strict

function send(data:object ){
    console.log(data)
}