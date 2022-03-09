// game
let num = Math.floor(Math.random() * 100);
let jab = '5 DAMAGE!';
let cross = '15 DAMAGE!';
let hook = '35 DAMAGE!';
let uppercut = '65 DAMAGE!';
let colour = 'red';
let damage = Math.floor(Math.random() * 2);

if (num >= 45) {
  console.log("You throw a jab! " + jab + damage);
  switch (colour) {
    case 'red':
      if (colour === 'red' && num >= 45) {
        console.log('You did major DAMAGE!');
      }
      console.log('red');
      break;
    case 'green':
      console.log('green');
      break;
    case 'blue':
      console.log('blue');
      break;
    case ' white':
      console.log('white');
      break;
    default:
      console.log('not there');
      break;
  }
} else if (num >= 20 && num <= 44) {
  console.log("You throw a cross! " + cross);
} else if (num >= 5 && num <= 19) {
  console.log("You throw a hook! " + hook);
} else if (num >= 0 && num <= 4) {
  console.log("You throw a uppercut! " + uppercut);
}

// / game















let a = 6;
let b = "Crit";

b !== "Crit" ? a += 1.5 : a -= 1.5;
console.log(b, a);