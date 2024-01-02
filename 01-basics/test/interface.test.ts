describe("interface", () => {
  it("interface type", () => {
    type ID = number | string;
    interface person {
      id: ID;
      name: string;
      age: number;
      descrition?: string;
    }

    interface employee extends person {
      numberOfEmployee: number;
    }

    interface addFunction {
      (firstValue: number, secondValue: number): number;
    }

    const addNumber: addFunction = (
      firstValue: number,
      secondValue: number
    ): number => {
      return firstValue + secondValue;
    };

    const Hendy: employee = {
      id: 2201,
      name: "Hendy",
      age: 22,
      descrition: "hendy is person who write this code",
      numberOfEmployee: 1,
    };
    expect(Hendy.name).toBe("Hendy");
    expect(Hendy.age).toBe(22);
    expect(addNumber(10, 10)).toBe(20);
  });
});
