import Util from "../src/util.js";

describe('Util.invertirCadena', () => {
  it('Hola reverse es igual a aloH', () => {
    expect(Util.invertirCadena("Hola")).toBe("aloH");
  });

  it('El numero 4083952015263 reversado deberia ser 3625102593804', () => {
    expect(Util.invertirCadena("4083952015263")).toBe("3625102593804");
  });

});

describe('Util.sumarDigitos', () => {
  it('La suma de todos los digitos de 24 es 6', () => {
    expect(Util.sumarDigitos("24")).toBe(6);
  });
});