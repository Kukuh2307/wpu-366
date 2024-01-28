// opsi 1
// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// opsi 2
// function hero(bullets, dragons){
//     return ( bullets / 2 >= dragons) ? true : false;
// }

// opsi 3
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(7, 4));
