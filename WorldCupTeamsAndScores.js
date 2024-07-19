finallerdekiGolSayilari = (arr) => {
  const kazananlar = {};
  const filtrelenmisFinal = arr.filter((mac) => mac.Stage === 'Final');

  filtrelenmisFinal.forEach((mac) => {
    const evSahibi = mac['Home Team Name'];
    const evSahibiGol = mac['Home Team Goals'];

    if (kazananlar[evSahibi] === undefined) kazananlar[evSahibi] = evSahibiGol;
    else kazananlar[evSahibi] += evSahibiGol;

    const deplasman = mac['Away Team Name'];
    const deplasmanGol = mac['Away Team Goals'];

    if (kazananlar[deplasman] === undefined)
      kazananlar[deplasman] = deplasmanGol;
    else kazananlar[deplasman] += deplasmanGol;
  });

  return kazananlar;
};
