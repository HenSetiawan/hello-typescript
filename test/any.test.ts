describe("any", () => {
  it("any type", () => {
    const person: any = {
      name: "Hendy",
      age: 22,
    };

    expect(person.name).toBe("Hendy");
    expect(person.age).toBe(22);
  });
});
