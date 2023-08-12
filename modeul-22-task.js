
// function feetToInch(feet){
//     let inche = feet * 12
//     return inche;
// }
// let customerFeet = 10;
// let resultInche = feetToInch(customerFeet);
// console.log("total inche", resultInche)

// ---------
// function centimeterToMeter(centimeter){
//     let meter = centimeter * 0.01
//     return meter;
// }
// let customercentimeter = 100;
// let resultmeter = centimeterToMeter(customercentimeter);
// console.log("total meter:", resultmeter)

// function paperRequirements(book1,book2,book3){
//     let book1paper = book1 * 100;
//     let book2paper = book2 * 200;
//     let book3paper = book3 * 300;
//     let totalpaper = book1paper + book2paper + book3paper;
//     return totalpaper;
// }

// let requirementBook1 = 2;
// let requirementBook2 = 2;
// let requirementBook3 = 2;
// let result = paperRequirements(requirementBook1,requirementBook2,requirementBook3);
// console.log("total paper=", result);

// --------
// function bestFriend(name){
//     let biggestName = name[0];
//     for(let i = 1; i < name.length; i ++){
//         let index = i;
//         let element= name[index]
//         if(element.length > biggestName.length){
//             biggestName = element
//         }
//         return biggestName;
//     }
// }
// let friendsName = ["arman", "tawfiq", "mahim", "ajad"];
// let result = bestFriend(friendsName);
// console.log(result)

// --------
// function arrnumbers(arr){
//     let arrAdd = [];
//     for(let i = 0; i < arr.length; i ++){
//         let add = arr[i];
//         if(add >= 0 || add == 0 ){
//             arrAdd.push(add)
//         }

//     }
//     return arrAdd;

// }

// let numbers = [12, 15, 65, 75, 80, 98, 0, 21, 54 ,64];
// let result = arrnumbers(numbers)
// console.log(result);

// ----
// function friendsName(name){
//     let uniqNames = [];
//     for(let i = 0; i < name.length; i ++){
//         let arrNames = name[i];
//         if(uniqNames.includes(arrNames) === false){
//             uniqNames.push(arrNames)
//         }
//     }
//     return uniqNames;
// }
// let names = [ "arman", "tawfiq", "mahim", "ajad", "arman", "tawfiq", "mahim", "ajad"]
// let result = friendsName(names);
// console.log(result)

// for(let i = 1; i <= 50; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("foober")
//     }else if(i % 3 == 0){
//         console.log("foo")
//     }else if(i % 5 == 0){
//         console.log("bar")
//     }else{
//         console.log(i)
//     }

// }

// ----
// function phonesName(names){
//     let highest = names[0];
//     for(let i = 0; i < names.length; i++){
//         let element = names[i];
//         if(element.camera > highest.camera){
//             highest = element;
//         }
//     }
//     return highest;
// }

// let phones = [
//     {name: "samsung", camera: 128, storage: "128gb", price: 36000, color: "golden"},
//     {name: "oneplus", camera: 64, storage: "32gb", price: 90000, color: "silver"},
//     {name: "lava", camera: 32, storage: "32gb", price: 13000, color: "golden"},
//     {name: "oppo", camera: 16, storage: "32gb", price: 25000, color: "black"},
//     {name: "xaomi", camera: 8, storage: "32gb", price: 40000, color: "blue"}
// ]
// let result = phonesName(phones);
// console.log(result)

// -----
// function sumOfCost(cost){
//     let sum = 0;
//     for(let i = 0; i < cost.length; i ++){
//         let element = cost[i];
//         let elementTotalPrice = element.price * element.order;
//         sum = sum + elementTotalPrice;
//     }
//  return sum

// }

// let shoppingCard = [
//     { name: "samsung", camera: 128, storage: "128gb", price: 36000, color: "golden", order:2 },
//     { name: "oneplus", camera: 64, storage: "32gb", price: 90000, color: "silver", order:3 },
//     { name: "lava", camera: 32, storage: "32gb", price: 13000, color: "golden", order:1 },
//     { name: "oppo", camera: 16, storage: "32gb", price: 25000, color: "black", order:4 },
//     { name: "xaomi", camera: 8, storage: "32gb", price: 40000, color: "blue", order:5 }
// ]
// let result = sumOfCost(shoppingCard);
// console.log("total all phones price =", result)

// -----
// function ticketPrice(ticketQuantity){
//     let firstTicketPrice = 100;
//     let secondTicketPrice = 90;
//     let westTicketPrice = 70;
//     if(ticketQuantity <= 100){
//         let price = ticketQuantity * 100;
//         return price;
//     }else if(ticketQuantity <= 200){
//         let first100Ticket = firstTicketPrice * 100;
//         let lastTicket = ticketQuantity - 100;
//         let lastTicketPrice = lastTicket * secondTicketPrice;
//         let totalPrice = first100Ticket + lastTicketPrice;
//         return totalPrice;
//     }else{
//         let first100Ticket = firstTicketPrice * 100;
//         let second100Ticket = secondTicketPrice * 100;
//         let lastTicket = ticketQuantity - 200;
//         let lastTicketPrice = lastTicket * westTicketPrice;
//         let totalPrice = first100Ticket + second100Ticket + lastTicketPrice;
//         return totalPrice;
//     }


// }
// let ticketKinlam = 201;
// let result = ticketPrice(ticketKinlam);
// console.log(result);

// -----------------
// problem task --

// function pandaCost(singaraQuantity, somucaqQuantity, jilapiQuantity){
//     let singaraPrice = 7 * singaraQuantity;
//     let somucaPrice = 10 * somucaqQuantity;
//     let jilapiPrice = 15 * jilapiQuantity;
//     let totolCost = singaraPrice + somucaPrice + jilapiPrice;
//     return totolCost;


// }
// let singara = 1;
// let somuca = 2;
// let jilapi = 1;
// let total = pandaCost(singara, somuca, jilapi);
// console.log(total);

// problem task ---

// function findingBadData(numbers){
//     let badData = 0;
//     for(let item of numbers){
//         if (item < 0){
//             badData++;
//         }
//     }
//     return badData;

// }
// let numbers = [1, -2, 3, 66, -56, -82, 70, -99]
// let result = findingBadData(numbers);
// console.log(result);

// function findingBadData(numbers){
//     let badData = 0;
//     for(let i = 0; i < numbers.length; i--){
//         let element = numbers[i]
//         if(element < 0){
//             badData ++
//         }
//     }
//     return badData;
// }



// let numbers = [1, -2, 3, 66, -56, -82, 70, -99, -45, -46]
// let result = findingBadData(numbers);
// console.log(result);

// --------

// function getGrade(score) {
//     if (score < 50) {
//         return "F";
//     } else if (score < 60) {
//         return "D";
//     } else if (score < 70) {
//         return "C";
//     } else if (score < 80) {
//         return "B";
//     } else if (score < 90) {
//         return "A";
//     } else {
//         return "A+";
//     }
// }

// const grades = {
//     Aaliya: getGrade(95),
//     Dalia: getGrade(66),
//     Salia: getGrade(40),
//     Malia: getGrade(59),
//     Lilia: getGrade(47),
//     Jaliya: getGrade(771)
// };

// console.log(grades);


// -----------


const nayoks = ["Bangla Bhai", "English Bhai", "Korean Bhai", "Turkish Bhai"];

for (const nayok of nayoks) {
    console.log(nayok);
}


