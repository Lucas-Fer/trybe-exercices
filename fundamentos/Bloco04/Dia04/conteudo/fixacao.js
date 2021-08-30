let player = {
name: 'Marta',
lastName: 'Silva',
age:34,
medals:{ 
  golden: 2, 
  silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");
console.log("Anos em que " + player.name + " foi campeã de melhor do mundo:");
console.log(player.bestInTheWorld + " < :Sendo a melhor do mundo 6 vezes.");
console.log("");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");