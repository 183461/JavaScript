const fare = {
  renk: "siyah",
  hiz: 5,
  hizDegistir: function(degisimYonu) {
    if (degisimYonu === "arttır" && this.hiz < 10) {
      this.hiz = this.hiz + 1;
      return "Yeni hız " + this.hiz;
    } else if (degisimYonu === "azalt" && this.hiz > 1) {
      this.hiz = this.hiz - 1;
      return "Yeni hız " + this.hiz
    } else {
      return "yanlış argüman"
    }
  } 
}
