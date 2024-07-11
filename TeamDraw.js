function randomNumber() {
  let number = Math.floor(Math.random() * 1001);

  if (number % 2 === 0) {
    return number + ' sayısı çift sayıdır. Çiftler kazandı.';
  } else {
    return number + ' sayısı tek sayıdır. Bekarlar kazandı.';
  }
}

//Cift mi Tek mi rastgele sayiyi isaretle.
