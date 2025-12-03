function hitungHargaAkhir(harga, hari_besar) {
  let final = harga;

  if (harga >= 500) {
    final = final * 0.9;
  }

  if (hari_besar) {
    final = final * 0.95;
  }

  if (final < 100) {
    final = 100;
  }

  return final;
}

module.exports = hitungHargaAkhir;
