// opsi 1
// const reverseSeq = n => {
//     const result = [];
//     for(let i = n; i >= 1;i--){
//         result.push(i)
//     }
//     return result
//   };

// opsi 2
const reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((el, i) => i + 1)
    .reverse();
};

console.log(reverseSeq(5));
