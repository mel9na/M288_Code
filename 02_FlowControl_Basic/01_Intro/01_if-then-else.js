/*
Thema: if-then-else ("wenn-dann-sonst", conditional statements)
    und switch-case
 */
/*
Example 1 - Traffic Light
 */

//Input
let color = 'orange';
console.log(`Traffic light is ${color}`);
//Verarbeitung
if (color === 'red'){
    console.log(`DON'T WALK`);
}
else if (color === 'orange'){
    console.log(`ATTENTION`);
}
else if (color === 'green'){
    console.log(`WALK`);
}
else {
    console.log(`OUT OF ORDER`);
}

/*
Example 2 - Is it cold or warm?
 */

//Input
let temp = 4;

//Überprüfung + Steuerung
if (temp <= 4) {
    console.log('It is freezing outside');
} else if (temp >= 40) {
    console.log('It is hot outside');
} else {
    console.log('Go for it. It is pretty nice out');
}


