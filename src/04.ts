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
type ShapeType = { a: boolean; b: boolean };

// Warning expected.
type AliasType = Array<string>;

class Mama {
  constructor(
    public a: AliasType,
    public b: string,
  ) {}
  sayHi() {
    console.log("Hi!");
  }
}

const haha: Mama | undefined = new Mama(["Love"], "Daughter");
haha.sayHi();

const a: string | null = "World";
console.log(a);

const array: Array<number> = [1, 2, 3];
console.log(array);

function giveVoidLike() {
  console.log("Something like void");
}
const voidLike = giveVoidLike();
console.log(voidLike);
