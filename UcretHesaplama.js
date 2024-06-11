let yas = 50;
let ucret = 450;

if ((65 <= yas && yas <= 100) || (0 <= yas && yas < 10)) {
  ucret = 0;
  console.log('Seyahat Ucretsiz');
} else if (25 <= yas && yas < 65) {
  console.log('Odenecek Tutar' + ucret);
} else if (15 <= yas && yas < 25) {
  ucret = ucret * 0.5;
  console.log('Odenecek Tutar' + ucret);
} else if (10 <= yas && yas < 15) {
  ucret = ucret * 0.2;
  console.log('Odenecek Tutar' + ucret);
} else {
  console.log('Hizmet Verilemiyor.');
}
