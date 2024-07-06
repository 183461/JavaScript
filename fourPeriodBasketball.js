takimSkoru = () => {
  return Math.floor(Math.random() * 16 + 10);
};

function macSkoru(takimSkoru, periyot = 4) {
  let evSahibiTakim = 0;
  let deplasmanTakimi = 0;

  for (i = 0; i < periyot; i++) {
    evSahibiTakim += takimSkoru();
    deplasmanTakimi += takimSkoru();

    evSahibiPuan = evSahibiTakim;
    deplasmanPuan = deplasmanTakimi;
  }

  return {
    evSahibiTakim: evSahibiPuan,
    deplasmanTakimi: deplasmanPuan,
  };
}

const sonuc = macSkoru(takimSkoru);
console.log(sonuc);
