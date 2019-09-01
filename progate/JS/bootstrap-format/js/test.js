// 「Hello World」とコンソールに出力してください
console.log("Hello World");

// 「にんじゃわんこ」とコンソールに出力してください
console.log("にんじゃわんこ");

// 以下の行をコメントアウトしてください
// console.log("この行をコメントアウトしてください");

console.log(5 + 7);
console.log(5 - 7);
console.log("5+7");
console.log(5 * 7);
console.log(5 / 7);
console.log(50 % 6);
console.log("テスト" + "      " + "したい");

let name = "忍者ワンっこ";
console.log(name);

let length = 5;
console.log(length);
console.log(length * length * 3);

name = "tori";
console.log(name);
name = "niku";
console.log(name);

let number = 7;
console.log(number);

number += 3;
console.log(number);

number = number / 2;
console.log(number);

const language = "フランス語";
console.log(language);
console.log(language + "を話せます");

const level = 12;
if (level > 10) {
    console.log("10よりでかい");
}

const age = 25;
console.log(age >= 20);
if (age >= 20) {
    console.log('あたいは成人');
}

const pass = 'pas';

if (pass === 'pass') {
    alert('ログイン成功');
} else {
    alert('失敗');
}

if (age >= 24) {
    console.log('二十歳以上');
} else if (age >= 10) {
    console.log("二十歳未満");
} else {
    console.log("がき");
}

if (20 <= age && age < 30) {
    console.log('２０代');
}

const rank = 5;

switch (rank) {
    case 1:
        console.log('gold');
        break;
    case 2:
        console.log('silver');
        break;
    case 3:
        console.log('blonde');
        break;
    default:
        console.log('none');
        break;
}

// number = 1;

// while (number <= 100) {
//     console.log(number);
//     number += 1;
// }

for (number = 1; number <= 100; number++) {
    if (number % 3 === 0) {
        console.log('バカになる');
    } else {
        console.log(number);
    }
}