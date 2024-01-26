// opsi 1
// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// console.log(grow([1, 2, 3, 4]));

// opsi 2
function grow(x) {
  return (result = x.reduce((acc, curr) => acc * curr, 1));
}
console.log(grow([1, 2, 3, 4]));
