interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}
let user1: Person;

user1 = {
  name: "David",
  age: 30,

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi! I am");

interface Length {
  length: number;
}

function count<T extends Length>(element: T):[T,string] {
  let text = "Got no value";
  if (element.length === 1) {
    text = "Got 1 element";
  } else if (element.length > 1) {
    text = "Got " + element.length + " elements";
  }
  return [element, text];
}
console.log('count: ',count('A'))