const targets = [
    "Lolos admin MCI",
    "IPK 4++",
    "Menjadi anak yang berbakti",
    "Menjadi superman",
    "Menjadi pribadi yang pandai menabung"
  ];
  
  function achieveTargets(targets, callback) {
    setTimeout(() => {
      console.log("Tujuan Ervan Semasa Kuliah");
      targets.forEach((target, index) => {
        console.log(` ${index+1}: ${target}`);
      });
      
      callback();
    }, 3000); 
  }
  function givePraise() {
    
  }
  achieveTargets(targets, givePraise);
