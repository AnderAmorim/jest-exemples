describe("Testing numbers", () => {
  test("dois mais dois", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test("adicionando números de ponto flutuante", () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3); // Isso funciona.
  });
});
