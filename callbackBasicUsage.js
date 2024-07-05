function mod2(girdi) {
  console.log(girdi % 3);
}

function mod3(girdi) {
  console.log(girdi % 3);
}

function bolme2(girdi) {
  console.log(girdi / 2);
}

function carpma3(girdi) {
  console.log(girdi * 3)
}

function carpma(x, y, callback) {
  const sonuc = x * y;
  callback(sonuc);
}

carpma(8, 7, mod2)
carpma(8, 7, mod3)
carpma(8, 7, bolme2)
carpma(8, 7, bolme2)
carpma(8, 7, carpma3)
