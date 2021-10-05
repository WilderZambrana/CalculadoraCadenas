import calculadoraCadenas from "./App.js";

describe("Calculadora de Cadenas", () => {
  it("Deberia devolver 1 caracter recibido", () => {
    expect(calculadoraCadenas("1")).toEqual(1);
  });
});
