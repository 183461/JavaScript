function tasKagitMakas(oyuncu) {
  let bilgisayar;
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    bilgisayar = 'taş';
  } else if (randomNumber === 1) {
    bilgisayar = 'kağıt';
  } else {
    bilgisayar = 'makas';
  }
  let expl =
    'Senin seçimin: ' + oyuncu + '. Bilgisayarın seçimi: ' + bilgisayar + '. ';
  let result;
  if (
    (oyuncu === 'taş' && bilgisayar === 'makas') ||
    (oyuncu === 'makas' && bilgisayar === 'kağıt') ||
    (oyuncu === 'kağıt' && bilgisayar === 'taş')
  ) {
    result = 'Kazandın!';
  } else if (
    (bilgisayar === 'taş' && oyuncu === 'makas') ||
    (bilgisayar === 'makas' && oyuncu === 'kağıt') ||
    (bilgisayar === 'kağıt' && oyuncu === 'taş')
  ) {
    result = 'Kaybettin!';
  } else {
    result = 'Beraberlik!';
  }
  return expl + result;
}
