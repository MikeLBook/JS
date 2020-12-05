const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      console.log('ded');
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        console.log(`${enemy.getName()} has damaged ${name}`);
        damage(1);
      }
      if (level >= enemy.getLevel()) {
        console.log(`${name} has damaged ${enemy.getName()}`);
        enemy.damage(1);
      }
    };
    return {attack, damage, getLevel, getName}
  };
  
  const goodGuy = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  goodGuy.attack(badGuy); // jim has damaged jeff

// a factory function is any function that returns an object without using the new keyword
