function tahminEt(level, tahmin) {
  let maxNumber;

  if (level === 'kolay') {
    maxNumber = 3;
  } else if (level === 'orta') {
    maxNumber = 5;
  } else {
    maxNumber = 7;
  }

  const sayi = Math.floor(Math.random() * maxNumber);
  if (typeof tahmin !== 'number' || tahmin < 0 || tahmin > 6) {
    console.log('0-7 aralığında seçim yapmalısın');
  } else if (tahmin === sayi) {
    return 'Kazandın!';
  } else {
    return 'Kaybettin: (kullanıcı: ' + tahmin + ', bilgisayar: ' + sayi + ')';
  }
}
