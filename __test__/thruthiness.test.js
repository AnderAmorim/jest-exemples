// toBeNull corresponde a apenas null
// toBeUndefined corresponde a apenas undefined
// toBeDefined é o oposto de toBeUndefined
// toBeTruthy combina com qualquer coisa que uma instrução if trata como verdadeiro
// toBeFalsy combina com qualquer coisa que uma instrução if trata como falso
const mock = {
  isNull: null,
  isUndefined: undefined,
  definedButFalse: 0,
  definedButTrue: 1,
};
describe("Testing boleans returns", () => {
  test("toBenull", () => {
    expect(mock.isNull).toBeNull();
  });
  test("toBeUndefined", () => {
    expect(mock.isUndefined).not.toBeNull();
    expect(mock.isUndefined).toBeUndefined();
  });
  test("toBeDefined", () => {
    expect(mock.isUndefined).not.toBeDefined();
    expect(mock.isUndefined).toBeUndefined();
  });
  test("toBeTruthy", () => {
    expect(mock.definedButFalse).toBeDefined();
    expect(mock.definedButFalse).not.toBeTruthy();
  });
  test("toBeFalse", () => {
    expect(mock.definedButTrue).toBeDefined();
    expect(mock.definedButTrue).toBeTruthy();
  });
});
