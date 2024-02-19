import { Data } from "dataclass";

class User extends Data {
  name: string = "Anonymous";
  age: number = 0;

  // custom method with arbitrary interface
  static from(data: any): User {
    let name: string = data.name;
    let age: number = parseInt(data.age, 10);
    return User.create({ name, age });
  }
}

let user = User.from({ name: "Liza", age: "18", someUnusedFlag: true });
console.log(user);
