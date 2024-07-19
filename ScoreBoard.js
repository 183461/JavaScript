macOzeti = (evSahibiTakim, deplasmanTakimi) => {
  const rastg = () => {
    Math.floor(Math.random() * 15) + 12;
    return rastg;
  };

  const cikti = {
    evSkor: 0,
    deplasmanSkor: 0,
  };

  let ozet = [];
  let cumle = '';

  for (i = 1; i < 5; i++) {
    cikti.evSkor += rastg();
    cikti.deplasmanSkor += rastg();

    cumle = `${i}. Periyot: ${evSahibiTakim} ${cikti.evSkor} - ${deplasmanTakimi} ${cikti.deplasmanSkor}`;
    ozet.push(cumle);
  }

  if (cikti.evSkor === cikti.deplasmanSkor) {
    cumle = `Maç ${cikti.evSkor} - ${cikti.deplasmanSkor} ile uzatmalara gitti`;
  } else {
    cumle = `Mac Sonucu: ${evSahibiTakim} ${cikti.evSkor} - ${cikti.deplasmanSkor}`;
    cumle = `${cumle} ${
      cikti.evSkor > cikti.deplasmanSkor ? 'kazandi' : 'kaybetti'
    }`;
  }
  ozet.push(cumle);
  return ozet;
};

console.log(macOzeti('Real Madrid', 'Barcelona'));
