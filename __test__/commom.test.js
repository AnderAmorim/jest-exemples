//Testando retorno retorno únicos
it("2+2=4", () => {
  expect(2 + 2).toBe(4);
});

//Testando retornos que devem ser percorridos
describe("Testing json returns", () => {
  const user = { name: "Anderson" };
  const user_with_full_name = { name: "Anderson", surname: "Amorim" };
  it("Testing json infos", () => {
    expect(user).toEqual({ name: "Anderson" });
  });
  it("Testing json infos with not propriete", () => {
    expect(user).not.toEqual(user_with_full_name);
  });
});
