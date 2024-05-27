/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
   constructor(name, strength, dexterity) {
      this.name = name,
      this.strength = strength,
      this.dexterity = dexterity,
      this.life = MAX_LIFE
   }

   fight(opponent) {
      if(opponent instanceof Fighter) {
         const damage = Math.ceil(Math.random() * this.strength)
         if (damage > opponent.dexterity) {
            // opponent.life = opponent.life - (damage - opponent.dexterity)
            opponent.life -= (damage - opponent.dexterity)
         }
         if (opponent.life < 0) {
            opponent.life = 0
         }
         return opponent.life
      }
   }

   isAlive() {
      return this.life
   }
}

module.exports = Fighter;