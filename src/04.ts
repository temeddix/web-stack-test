// Warning expected.
enum Haha {
  A,
  B,
}

// Warning expected.
interface Dada {
  a: number;
  b: string;
}

// Warning expected.
namespace MyNamespace {}

// Warning expected.
type ComplexType = { a: boolean; b: boolean };

type SimpleType = string;

class Mama {
  constructor(
    public a: SimpleType,
    public b: string,
  ) {}
  sayHi() {
    console.log("Hi!");
  }
}

const haha: Mama | null = new Mama("Love", "Daughter");
haha.sayHi();

const a: string | null = "World";
console.log(a);

const array: Array<number> = [1, 2, 3];
console.log(array);
