//  inche to feet convart in more and more properties in one function------

function inche(number){
    var feet = number / 12;
    return feet;
}
// dadar height
var dadainche = 60;

var result = inche(dadainche);
console.log("dadafeet:", result);
// dadir height 
var dadiinche = 50;

var result = inche(dadiinche);
console.log("dadifeet:",result)
// mamar height
var mamainche = 70;

var result = inche(mamainche);
console.log("mamafeet:",result)


// even and odd true false convart--------

function teacher(number){
    var even = number % 2;
    if(even == 0){
        console.log("it is a even number")
        return true;
    }else{
        console.log("it is a odd number")
        return false;
    }
   
}

// even number 
var evenNumber = 10;
var result = teacher(evenNumber);
console.log(result)
// odd number
var evenNumber = 11;
var result = teacher(evenNumber);
console.log(result)

// leap year true false convart--------

function isLeapYear(year){
    var answer = year % 4;
    if(answer == 0){
        console.log(year, "it is leapYear")
        return true;
    }else{
        console.log(year, "it is not leapYear")
        return false;
    }
}
// leap year 
var years = 2020;
var result = isLeapYear(years);
console.log(result);
// not leap year 
var years = 2021;
var result = isLeapYear(years);
console.log(result);

// sum and odd an array --------ad

function sumOfArray(numbers){
    sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var index = i;
        var arrayElements = numbers[index];
        sum = sum + arrayElements;
        console.log(index, arrayElements, sum)
    }
    return sum;
}

var arrayNumbers =[10, 20, 30, 40, 50, 60];
sumOfArray(arrayNumbers);

// odd of an array element

function oddArray(number){
    
    let oddNumberArray = [];
    for(let i = 0; i < number.length; i++){
        let index = i;
        let element = number[index];
        if(element % 2 == 1){
            console.log(index, element)
            oddNumberArray.push(element);
        }
    }
    return oddNumberArray;

}
var oddNumber = [10, 11, 20, 21, 30, 31,41];
var result = oddArray(oddNumber);

console.log(result);
