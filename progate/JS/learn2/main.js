// let number = 1;

// while (number <= 100) {
//     console.log(number);
//     number += 1;

// }

// for (let number = 1; number <= 100; number++) {
//     console.log(number);
// }

// for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0) {
//         console.log("3の倍数");
//     } else {
//         console.log(number);
//     }
// }

// const animals = ["dog", "cat", "sheep"];
// // console.log(animals);
// console.log(animals[0]);
// console.log(animals[2]);
// animals[2] = "rabbit";
// console.log(animals[2]);

// for (let i = 0; i < 3; i++) {
//     console.log(animals[i]);
// }

// const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
// console.log(animals.length);

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// const character = { name: "にんじゃわんこ", age: 14 };
// console.log(character);
// console.log(character.name);
// character.age = 20;
// console.log(character.age);

// const characters = [
//     { name: "にんじゃわんこ", age: 14 },
//     { name: "ひつじ仙人", age: 1000 }
// ]
// console.log(characters[0]);
// console.log(characters[1].age);

// const characters = [
//     { name: "にんじゃわんこ", age: 14 },
//     { name: "ひつじ仙人", age: 100 },
//     { name: "ベイビーわんこ", age: 5 },
//     { name: "とりずきん" }
// ];

// for (let i = 0; i < characters.length; i++) {
//     console.log("--------------------");
//     console.log(`名前は${characters[i].name}です`)
//     if (characters[i].age === undefined) {
//         console.log("秘密です");
//     } else {
//         console.log(`年齢は${characters[i].age}です`)
//     }



// }


// 総合演習（１）
const cafe = {
    name: "Progateカフェ",
    businessHours: {
        // businessHoursの値に指定されたオブジェクトを代入してください
        opening: "10:00(AM)",
        closing: "8:00(PM)",
    },
    menus: ["コーヒー", "紅茶", "チョコレートケーキ"],
};

console.log(`店名:${cafe.name}`);
console.log(`営業時間: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");
for (let i = 0; i < cafe.menus.length; i++) {
    console.log(cafe.menus[i]);
}