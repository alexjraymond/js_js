var markWeight = 78;
var markHeight = 1.69;
var johnWeight = 92;
var johnHeight = 1.95;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

var markHigherBMI = markBMI > johnBMI;

alert(markHigherBMI);

// console.log('marks bmi is:', markBMI);
// console.log('johns bmi is:', johnBMI);
// console.log('is marks bmi higher?', markHigherBMI);
