import axios from 'axios';
import { brotliCompress } from 'zlib';


let hello: string = 'hello';
console.log(hello);


// 冗長だから型推論すればよい
let hasHalue: Boolean = true;
let cout: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// こういう時に型注釈する
let hoge: string;

// object型を注釈できるが，オブジェクト全般を表すのであまり使わない
const person: {
    name: string,
    age: number
}　= {
    name: 'Jack',
    age: 21,
}

// これで良い
const person2 = {
    name: 'Jack',
    age: 21,
}

const fruits = ['Apple', 'Banana', 'Grape'];

// anyは何でも入る
const fruits2: any = ['Apple', 'Banana', 1];

// 型推論させると？
const fruits3 = ['Apple', 'Banana', 1]


// tuple 必ず型注釈する
// 配列に厳しい制約が入ったもの
const book: [string, number, boolean] = ['buisiness', 1500, false];

// push はできる．初期値には厳しいが途中はゆるい
book.push('hoge');
// 参照するときにはエラーがでる
// console.log(book[3]);


// Enum 
// enum CoffeeSize {
//     SHORT =  'SHORT',
//     TALL =  'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI',
// }

// 数字で十分
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

// anyと書いたらなんでもできちゃう
// 極力使わない
let anything: any = true;
let banana = 'banana';
banana = anything;

// union型
let unionType: number | string = 10;
unionType = 'hello';

let unionType2: (number | string)[] = [21, 'hello'];


// リテラル型
// 決まった値のみを扱う
// つまりconst
const apple = 'apple';

// enumと似たような書き方ができる
// cloth.size自体もリテラル型になる'small'
// let clothSize: 'small' | 'medium' | 'large' = 'small';
// const cloth = {
//     color: 'white',
//     size: clothSize
// }

// 2つ3つしかないならこう書いても良いかも
// + タイプエイリアス
type ClothSize = 'small' | 'medium' | 'large'
const cloth: {
    color: string,
    size: ClothSize
} = {
    color: 'whire',
    size: 'medium',
}


// function 
function add(num1: number, num2: number): number {
    return num1 + num2;
}

function sayHello(): void {
    console.log('Hello');
}

// 関数の型注釈
const anotherAdd: (n1: number, n2: number) => number = add;
const antherAdd2 = function (num1: number, num2: number): number {
    return num1 + num2;
}

// アロー関数
const doubleNumber: (num: number) => number = num => num * 2;

// call back 関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

// unknown型  使うときだけチェックが入る
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;

if (typeof unknownInput === 'string') {
    text = unknownInput;
}

// never型
function error(message: string) {
    throw new Error(message);
}
