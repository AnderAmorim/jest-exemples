describe("Testing emails", () => {
  const emailTestingValidate = "andersonamorim939@gmail.com";
  const emailTestingNotValidate = "andersonamorim939gmailcom";

  test("Testing with email validate", () => {
    expect(emailTestingValidate).toMatch(/\S+@\S+\.\S+/);
  });
  test("Testing with email not validate", () => {
    expect(emailTestingNotValidate).not.toMatch(/\S+@\S+\.\S+/);
  });
});
