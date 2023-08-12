var number = [21, 35, 65 ,68, 84, 41, 99, 98]

for(var i = 0; i < number.length; i++){
    var arrayNumbers = number[i];
    if(arrayNumbers < 50){
        continue;
    }
    console.log(arrayNumbers)
}