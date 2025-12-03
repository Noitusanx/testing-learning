const hitungHargaAkhir = require("../src/testing-learn");

const { describe, test, expect } = require("@jest/globals");

describe("hitungHargaAkhir", () => {
  test("Harga <500 tanpa hari besar (tidak dapat diskon)", () => {
    expect(hitungHargaAkhir(400, false)).toBe(400);
  });

  test("Harga >=500 tanpa hari besar (dapat diskon 10%)", () => {
    expect(hitungHargaAkhir(600, false)).toBe(550);
  });

  test("Harga >=500 dengan hari besar (diskon 10% + 5%)", () => {
    expect(hitungHargaAkhir(700, true)).toBe(598.5);
  });

  test("Harga setelah diskon kurang dari 100, capping jadi 100", () => {
    expect(hitungHargaAkhir(100, true)).toBe(100);
  });
});
