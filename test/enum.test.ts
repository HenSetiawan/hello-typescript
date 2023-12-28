describe("enum type", () => {
  it("enum type", () => {
    enum priority {
      VIP = "VIP",
      VVIP = "VVIP",
      REGULAR = "REGULAR",
    }
    const Hendy: {
      id: string | number;
      name: string;
      age: number;
      type: priority;
    } = {
      id: 2023,
      name: "Hendy",
      age: 22,
      type: priority.REGULAR,
    };

    expect(Hendy.name).toBe("Hendy");
    expect(Hendy.age).toBe(22);
  });
});
