const alien = {
    name: "Wormuck",
    race: "Cucusumusu",
    planet: "Eden",
    weight: "259kg",
  };
  
  for (const propiedad in alien) {
    console.log("Propiedad: " + propiedad + ", valor: " + alien[propiedad]);
  }
