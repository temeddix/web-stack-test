import { Data } from "dataclass";

class User extends Data {
  name!: string;
  age = 0;

  // custom method with arbitrary interface
  // eslint-disable-next-line
  static from(data: any): User {
    const name: string = data.name;
    const age: number = parseInt(data.age, 10);
    return User.create({ name, age });
  }
}

const user = User.from({ name: "Liza", age: "18", someUnusedFlag: true });
console.log(user);
