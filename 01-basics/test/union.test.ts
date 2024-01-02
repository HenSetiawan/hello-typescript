describe("union", () => {
  it("union type", () => {
    const process = (value: string | number) => {
      if (typeof value === "string") {
        return `Hello ${value}`;
      } else if (typeof value === "number") {
        return value * 2;
      }
    };

    expect(process("Hendy")).toBe("Hello Hendy");
    expect(process(10)).toBe(20);
  });
});
