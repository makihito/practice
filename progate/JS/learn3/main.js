// const greet = function() {
//     console.log("こんにちは！");
//     console.log("関数を学習していきましょう！");
// }

// greet();

const hello = function() {
    console.log("こんちわ！");
    console.log("私の名前はあきひとでし");
}

hello();

// const greet = () => {
//     console.log("こんにちは！");
//     console.log("関数を学習していきましょう！");
// }

// greet();

const greet = (name) => {
    console.log(`こんにちは、${name}さん`);
}

greet("ひつじ仙人");

const add = (number1, number2) => {
    console.log(number1 + number2);
}

add(5, 7);

const half = (number) => {
    return number / 2;
}

const result = half(130);
console.log(result);

const check = (number) => {
    return number % 3 === 0;
}

if (check(123)) {
    console.log("3の倍数");
} else {
    console.log("倍数ちゃう");
}

const name = "にんじゃ";

const introduce = (name) => {
    console.log(`わたしは${name}です`);
}

introduce("hituji");

console.log(name);


// 総合演習
const number1 = 103;
const number2 = 72;
const number3 = 189;

const getMax = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    } else if (c > max) {
        max = c;
    }
    return max;
}

const value = getMax(number1, number2, number3);
console.log(value);