function getBelowTheAverage(degerlendirmeler) {
  const toplamPuan = degerlendirmeler.reduce(
    (sonuc, puanlar) => sonuc + puanlar.puan,
    0
  );
  const ortalamaPuan = toplamPuan / degerlendirmeler.length;

  const kalanIsimler = degerlendirmeler
    .filter((puanlar) => puanlar.puan < ortalamaPuan)
    .map((puanlar) => puanlar.isim);

  return kalanIsimler;
}

const degerlendirmeler = [
  {
    isim: 'Nalan',
    puan: 5,
    geribildirim: 'Mükemmel atmosfer ve mükemmel düşünülmüş modeller!',
  },
  {
    isim: 'Kuddusi',
    puan: 3,
    geribildirim:
      'Benim zevkime göre biraz fazla yenilikçi, modeller iyi ama fiyatı yüksek',
  },
  {
    isim: 'Kamuran',
    puan: 4,
    geribildirim: 'Gittiğim bayide mükemmel bir atmosfer ve havalı hisler',
  },
  {
    isim: 'Elif',
    puan: 4.5,
    geribildirim:
      'Evimden pek çıkmıyorum ama kaliteli bir arabam olsun istiyorum. Şiddetle tavsiye ederim.',
  },
  {
    isim: 'Pınar',
    puan: 3,
    geribildirim:
      'Tasarımları çok güzel, ama bu kadar özellik kullanılır mı bilemedim.',
  },
  {
    isim: 'Ahmet',
    puan: 2,
    geribildirim:
      'Arabaların özellikleri beni fazla etkilemedi. Gereksiz pahalı.',
  },
  {
    isim: 'Latife',
    puan: 4,
    geribildirim: 'Takas desteği harika!',
  },
  {
    isim: 'Reyna',
    puan: 3.5,
    geribildirim: '',
  },
];

console.log(getBelowTheAverage(degerlendirmeler));

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getBelowTheAverage;
