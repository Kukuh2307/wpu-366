// opsi 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft;
//   };

// // opsi 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

// opsi 3
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump ? "True" : "False";

console.log(zeroFuel(50, 25, 1));
