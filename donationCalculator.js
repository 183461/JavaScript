function tutarHesapla(liste) {
  const metin = liste.join('').toLowerCase();

  let toplam = 0;

  const harfler = ['a', 'h', 'm', 'e', 't'];

  for (let h = 0; h < harfler.length; h++) {
    for (let m = 0; m < metin.length; m++) {
      if (harfler[h] === metin[m]) {
        toplam++;
      }
    }
  }
  return toplam * 1000;
}
