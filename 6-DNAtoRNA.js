// opsi 1
// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

// opsi 2
// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");
// }

// opsi 3
const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCAT"));
