function Logger(logging: string) {
  return function (constructor: Function) {
    console.log(logging);
    console.log(constructor);
  };
}

function Template(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}
// @Logger("User is logging")
@Template("<h1>Thi is Person Object</h1>", "app")
class Person {
  name = "Adam";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);
