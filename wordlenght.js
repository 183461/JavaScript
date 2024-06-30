function isHardToComprehend(kelime) {
  const kelimem = kelime.length;

  if (kelimem >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isHardToComprehend('kalakalmak'));
console.log(isHardToComprehend('kalakalma'));
