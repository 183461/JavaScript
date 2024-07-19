function carSimulator(marka, model, kilometre, fiyat) {
  const araba = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice() {
      return `Arabanın güncel piyasa değeri ${this.fiyat} TL'dir.`;
    },
    refuel(dolum) {
      this.depo += dolum;
      if (this.depo > 100) {
        this.depo = 100;
      }
      return `Depo %${this.depo} doludur.`;
    },
    drive(km) {
      const benzinHarcama = (km / 100) * 5;
      const degerKaybi = (km / 100) * 50;

      if (benzinHarcama > this.depo) {
        console.log('Yeterli benzin yok.');
        return;
      }

      this.depo -= benzinHarcama;
      this.kilometre += km;
      this.fiyat -= degerKaybi;

      return `Araba'nın güncel kilometresi: ${this.kilometre}`;
    },
  };

  return araba;
}
