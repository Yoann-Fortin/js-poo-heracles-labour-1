// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 1;

while(heracles.isAlive() && nemean.isAlive()) {
   console.log(
      `
         Round n°${round}
         Heracles fight Nemean Lion - Nemean ${heracles.fight(nemean)} life points
         ${nemean.life > 0 ? `Nemean Lion fight Heracles - ${nemean.fight(heracles)} life points` : ""}
      `
   );
   round++;
}

if(heracles.isAlive()) {
   return console.log(`Heracles defeat Nemean Lion (${heracles.life})`);
}

return console.log(`Nemean Lion defeat Heracles (${nemean.life})`)