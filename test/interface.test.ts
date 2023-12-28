describe("interface", () => {
  it("interface type", () => {
    type ID = number | string;
    interface person {
      id: ID;
      name: string;
      age: number;
      descrition?: string;
    }

    const Hendy: person = {
      id: 2201,
      name: "Hendy",
      age: 22,
      descrition: "hendy is person who write this code",
    };

    expect(Hendy.name).toBe("Hendy");
    expect(Hendy.age).toBe(22);
  });
});
