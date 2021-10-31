const sum = require("../src/sum");

describe("testando soma", () => {
  test("1 + 2 is 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  //Negativo e possitivo
  it("should return -1 with 1 + (-2)", () => {
    expect(sum(1, -2)).toBe(-1);
  });

  //Negativo e negativo
  it("should return -4 with (-2) + (-2)", () => {
    expect(sum(-2, -2)).toBe(-4);
  });
});
