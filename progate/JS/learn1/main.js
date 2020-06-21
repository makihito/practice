function run() {
    console.log("Hello!");
}
console.log("Hello World");

console.log("にんじゃわんこ");

let length = 5;
console.log(length ** 2 * 3);

let number = 7;

console.log(number);

number += 3;
console.log(number);

number /= 2;
console.log(number);

const language = "フランス語";

console.log(language + "を話せます");

const name = "にんじゃわんこ";
const age = 14;

console.log(`ぼくの名前は${name}です`);
console.log(`今は${age}歳です`)

const level = 12;

if (level > 10) {
    console.log("レベルが10より大きいです");
}

const ages = 24;

console.log(ages <= 10);

if (ages >= 10) {
    console.log("10以上です");
}

const password = "ninjawank";

if (password === "ninjawanko") {
    console.log("ログイン成功");
}

if (password !== "ninjawanko") {
    console.log("ログイン失敗");
}

const ageage = 21;

if (ageage >= 20) {
    console.log("私は20歳以上です");
} else {
    console.log("私は20歳未満です");
}

if (ageage >= 20) {
    console.log("私は20歳以上です");
} else if (ageage >= 10) {
    console.log("私は20歳以下、１０歳以上です");
} else {
    console.log("私は10歳以下です");
}

if (ageage >= 20 && 30 > ageage) {
    console.log("私は20代です");
}

const rank = 5;

switch (rank) {
    case 1:
        console.log("優勝");
        break;
    case 2:
        console.log("２位");
        break;
    case 3:
        console.log("３位");
        break;
    default:
        console.log("メダルはありません");
        break;

}