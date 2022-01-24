// function howMuchILoveYou(nbPetals) {
//     // your code
//     if (nbPetals == 7) {
//         return "I love you";
//     } else if (nbPetals == 6) {
//         return "not at all";
//     } else if (nbPetals == 5) {
//         return "x5";
//     } else if (nbPetals == 4) {
//         return "x4";
//     } else if (nbPetals == 3) {
//         return "a lot";
//     } else if (nbPetals == 2) {
//         return "x2";
//     } else if (nbPetals == 1) {
//         return "x1";
//     } else {
//         return "x0t";
//     }
// }

function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6]
  }

console.log(howMuchILoveYou(7)); // return "I love you"
console.log(howMuchILoveYou(3)); // return "a lot"
console.log(howMuchILoveYou(6)); // return "not at all"