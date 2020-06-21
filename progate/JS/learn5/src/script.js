// const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];

// console.log(characters);

// // pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
// characters.push("とりずきん");

// // 配列charactersを出力してください
// console.log(characters);

// characters.forEach((character) => {
//     console.log(character);
// });

const numbers = [1, 3, 5, 7, 9, 4, 8];

const foundNumber = numbers.find((number) => {
    return number % 3 === 0;
});

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(foundNumber);
console.log(evenNumbers);
console.log(doubledNumbers);

const characters = [
    { id: 1, name: "にんじゃわんこ", age: 6 },
    { id: 2, name: "ベイビーわんこ", age: 2 },
    { id: 3, name: "ひつじ仙人", age: 100 },
    { id: 4, name: "とりずきん", age: 21 }
]

const foundCharacter = characters.find((character) => {
    return character.id === 3;
});

const underTwenty = characters.filter((character) => {
    return character.age <= 20;
});

const fullNames = characters.map((character) => {
    return character.name + " " + character.age;
});

console.log(foundCharacter);
console.log(underTwenty);
console.log(fullNames);