import { Data } from "dataclass";

class Inner extends Data {
  name = "Anon";
  age = 0;
}

// 1. easily describe your data classes using just language features
class User extends Data {
  name = "Anon";
  age = 0;
  inner = Inner.create();
}

// 2. instantiate classes while type systems ensure correctness
let user = User.create({ name: "Liza", age: 23, inner: Inner.create() });
console.log(user);
// > User { name: "Liza", age: 23 }

// 3. make changes while benefiting from immutable values
let updated = user.copy({ name: "Ann" });
// > User { name: "Ann", age: 23 }
updated = updated.copy({ name: "Liza" });
// > User { name: "Liza", age: 23 }

// 4. compare objects by their value, not reference
console.log(user === updated, user.equals(updated));
// > false, true
