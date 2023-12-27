describe("object type", () => {
  it("object type", () => {
    const Hendy: { id: string | number; name: string; age: number } = {
      id: 2023,
      name: "Hendy",
      age: 22,
    };

    expect(Hendy.name).toBe("Hendy");
    expect(Hendy.age).toBe(22);
  });
});
