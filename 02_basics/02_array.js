const marvel_heros = ["ironman","thor","captain america","hulk"]

const dc_heros =["superman","batman","flash","wonderwomen"]

// marvel_heros.push(dc_heros)
// // console.log(marvel_heros);


// const both_universe = marvel_heros.concat(dc_heros)

// console.log(both_universe);


const spread_heros = [...marvel_heros,...dc_heros]

// console.log(spread_heros);


const newArr = [1,2,3,[6,7,8,9],6,[7,8[4,5]]]

const oneArr = newArr.flat(Infinity);

console.log(oneArr);


console.log(Array.isArray("fayzan"));

console.log(Array.from({name:"fazan"}));

let score1 =100
let score2 =200
let score3 =300

const addArr =(Array.of(score1,score2,score3));
const joinArr = addArr.join();
console.log(joinArr);

console.log(joinArr.length);

console.log(score1+score2+score3);

