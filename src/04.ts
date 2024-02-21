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
type ShapeType = { a: boolean; b: boolean };

// Warning expected.
type AliasType = Array<string>;

// Warning expected.
const array: number[] = [1, 2, 3];
console.log(array);

// Warning expected.
namespace MyNamespace {}

class Mama {
  constructor(
    public a: AliasType,
    public b: string,
  ) {}
  sayHi() {
    console.log(`Hi! ${this.a}`);
  }
}

const haha: Mama | undefined = new Mama(["Love"], "Daughter");
haha.sayHi();

const a: string | null = "World";
console.log(a);

function giveVoidLike() {
  console.log("Something like void");
}
const voidLike = giveVoidLike();
console.log(voidLike);

abstract class MyAbstract {
  abstract a: number;
  abstract b: string;
}
class MyReal extends MyAbstract {
  a = 4;
  b = "Hmm";
}
console.log(new MyReal());
