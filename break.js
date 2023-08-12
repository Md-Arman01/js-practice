// var number = 1;

// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i >= 10){
//         break;
//     }
// }
// output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// array break practice

var number = [10, 20, 30, 40, 50, 60, 70]

for(var i = 0; i < number.length; i++){
    var arrayNumbers = number[i];
    if(arrayNumbers > 50){
        break
    }
    console.log(arrayNumbers)
}
// output:
// 10
// 20
// 30
// 40

// var fnds = ['arman', 'abir', 'ariyan'];

// for(var i = 0; i < fnds.length; i++){
//     var arrayNumbers = fnds[i];
//     if(arrayNumbers === "abir"){
//         break
//     }
//     console.log(arrayNumbers)
// }