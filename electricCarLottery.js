function lottery(arr) {
  const ilkBes = arr.slice(0, 5);

  const onarli = [arr[9], arr[19], arr[29], arr[39], arr[49]];

  const kazananlar = ilkBes.concat(onarli);

  const elimizdekiler = [0, 1, 2, 3, 4, 9, 19, 29, 39, 49];

  const rastgele = Math.floor(Math.random() * arr.length);

  if (elimizdekiler.indexOf(rastgele) > 0) {
    rastgele = Math.floor(Math.random() * arr.length);
  } else {
    kazananlar.push(arr[rastgele]);
  }
  return kazananlar;
}
