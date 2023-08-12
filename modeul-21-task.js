// toLowerCase and toUpperCase convert--------------

const myName1 = 'Arman';
console.log(myName1.toLowerCase());

const myName2 = 'Arman';
console.log(myName2.toUpperCase());

// includes -------------

const song1 = "amer suner bangla ami tumay vlo bashi"
console.log(song1.includes("suner"))

// indesof ----------------

const song2 = "amer suner bangla ami tumay vlo bashi"


console.log(song2.indexOf("suner"));

if (song2.indexOf("suner") !== -1) {
    console.log("find it")
} else {
    console.log("cannot find it")
}

// split ---------------

let song3 = "amer suner bangla ami tumay vlo bashi"
let result1 = song3.split(' ');
let result2 = song3.split('.');
let result3 = song3.split('');

console.log(result1);
console.log(result2);
console.log(result3);

// slice ---------------

let song4 = "amer suner bangla ami tumay vlo bashi";
let result4 = song4.slice(5, 9);

console.log(result4);

// concat / join ----------------

let my = ["amer nam arman", "ami clg a pori", "ami clg a jai nah temon"]

console.log(my.join())


// math - pow,abs,round,ceil,floor,random--------

// math.pow---
let exp = Math.pow(2, 3);

console.log(exp)
// output-8

// math.abs---
let num1 = 40;
let num2 = 50;
console.log(Math.abs(num1 - num2))
// output 10 (- ta takbe nah)

// round---
let bhognansho1 = 2.499999
console.log(Math.round(bhognansho1))
// output-2
let bhognansho2 = 2.599999
console.log(Math.round(bhognansho2))
// output-3

// random---

for (let i = 1; i <= 5; i++) {
    let number = Math.round(Math.random() * 6);
    console.log(number)
}
// output - ak akbar ak akta shonkha asbe randomly ludo kelar moto 

//  Swap variable, swap without temp, destructing------
// temp way te changing
let first = 10;
let second = 15;
console.log(first, second); // output- 10 15
let temp = first;
first = second;
second = temp;
console.log(first, second); // output- 15 10
// destructing way te changing
let first2 = 50;
let second2 = 100;
// output- 50 100
[first2, second2] = [second2, first2];
console.log(first2, second2)
// output- 100 50


// practice problem 1 ---------

const arman = 80;
const abir = 81;
if(arman > abir){
    console.log("arman win")
}else{
    console.log("abir win")
}
// output- abir win

const tawfiq = 87;
const mahim = 95;
const ajad = 97;
if(tawfiq > mahim && tawfiq > ajad){
    console.log("tawfiq win")
}else if(mahim > tawfiq && mahim > ajad){
    console.log("mahim win")
}else{
    console.log("ajad win")
}
// output - ajad win

const tahasin = 91;
const mouddin = 96;
const nejam = 100;
const winers = Math.max(91, 96, 100)
console.log(winers)
// output - 100

const tahasin2 = 91;
const mouddin2 = 96;
const nejam2 = 100;
const loser = Math.min(91, 96, 100)
console.log(loser)
// output - 91

// practice problem 2 ---------

function highestNumber(numbers){
    let lergest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let index = i
        let element = numbers[index];
        if(element > lergest){
            lergest = element;
        }
    }
    return lergest;
}

let num = [26 , 546, 262, 352, 252, 455]
let result =highestNumber(num);
console.log(result);
// output - 546 
function lowestNumber(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let index = i
        let element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

let shonka = [26 , 546, 262, 352, 252, 455]
let output =lowestNumber(num);
console.log(output);
// output - 26

// Reverse a string and Reverse words in a sentence----------
// Reverse a string 
function reverse(strg){
    let sum = ''
    for(let i = strg.length-1; i >= 0; i--){
        let index = i
        let element = strg[index]
        sum = sum + element
        console.log(index, element, sum)
    }
    return sum;
}
let sentence = "i am a good boy"
let output2 = reverse(sentence);
console.log(output2)
// output yob doog a ma i

// Reverse a string Reverse words

function reverseword(strg){
    let sum = ' '
    for(let i = strg.length-1; i >= 0; i--){
        let index = i
        let element = strg[index]
        sum = sum + element
        console.log(index, element, sum)
    }
    return sum;
}
let sentence2 = "i am singel and poor"
let output3 = reverseword(sentence2);
console.log(output3)

// fibo --------------------------------

let fibo = [0, 1]
    for(let i = 2; i < 10; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

console.log(fibo)