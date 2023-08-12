var friens = {
    tawfiq : 18,
    mahim : 19,
    arman : 19,
    ajad : 20
}

var friensNames = Object.keys(friens);
// console.log(friensNames)
var friensAge = Object.values(friens);
// console.log(friensAge)

for(var i = 0; i < friensNames.length; i++){
    var properties = friensNames[i];
    var values = friens[properties]
    console.log(properties , values)
}


