// const animal = {
//     name: "レオ",
//     age: 3,
//     greet: () => {
//         console.log("こんにちは");
//     }
// }

// console.log(animal.name);
// animal.greet();


class Animal {
    constructor(name, age) { //引く数を定義できる
        console.log("インスタンスを生成しました");
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんいちは");
    }
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`歳は${this.age}です`);
    }
}

const animal = new Animal("モカ", 3);
// 「名前: 〇〇」となるように出力してください
console.log(`名前: ${animal.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢: ${animal.age}`);


class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`犬種は${this.breed}です`);
        console.log(`歳は${this.age}です`);
        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
    }
    getHumanAge() {
        return this.age * 7;
    }

}

const dog = new Dog("reo", 6, "チワワ");
dog.info();