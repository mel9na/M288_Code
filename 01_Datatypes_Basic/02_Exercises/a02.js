/*
Tasks: Convert values from Fahrenheit (USA) to Celcius and Kelvin
Celsius = Fahrenheit minus 32, then multiply by 5 and divide by 9
Kelvin = Fahrenheit minus 32, then multiply by 5 and divide by 9 + 273.15
*/
//Assign to variable 'fahrenheit' a number (integer)
let Fahrenheit = 50;
console.log(Fahrenheit);
//Convert and print to Celsius
let Celsius = (Fahrenheit - 32) * 5/9;
console.log(Celsius);
//Convert and print to Kelvin
let Kelvin = (Fahrenheit - 32) * 5/9 + 273.15;
console.log(`${Fahrenheit} °F entspricht ${Celsius} °C und ${Kelvin} °K`);
