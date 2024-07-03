const fare = {
  renk: "siyah",
  hiz: 5,
  hizDegistir: function(degisimYonu) {
    if (degisimYonu === "arttır") 
    {
      if (this.hiz < 10) {
        this.hiz = this.hiz + 1;
      }
      return "yeni hız: " + this.hiz;
    } 
    else if (degisimYonu === "azalt") 
    {
      if (this.hiz > 1) {
        this.hiz = this.hiz - 1;
      }
      
      return "yeni hız: " + this.hiz;
    } 
    else {
      return "yanlış argüman"
    }
  }
}

console.log(fare.hizDegistir("azalt"));
console.log(fare.hizDegistir("azalt"));
console.log(fare.hizDegistir("azalt"));
