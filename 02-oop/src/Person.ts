class Person {
  readonly id: number;
  age: number;
  name: string;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.age = age;
    this.name = name;
  }
}

const hendy: Person = new Person(1, 22, "Hendy");
