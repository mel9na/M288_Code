/*
Task: Determine discounts
A. Using if-then-else, determine discounts correctly based on the given comments below.
B. Check with different values for variable 'age' that discounts
are computed correctly.
 */
'use strict';
//Assign to variable 'age' i.e. 35 which means 35 years old
let age = 5;
//if the age is 6 or younger, then admission is free
if (age < 6){
    console.log(`If the age is ${age} or younger, then admission is free.`);
}
//if age is younger than 16, then there is a child discount
else if (age < 16){
    console.log(`If the age is younger than ${age}, then there is a child discount.`);
}
//if age is younger or equal than 25, then there is a youngster discount
else if (age <= 25){
    console.log(`If the age is younger or equals ${age}, then there is a youngster discount.`);
}
//if the person is 65 or older, then there is a senior discount
else if (age >= 65){
    console.log(`If the age is ${age} or older, then there is a senior discount.`);
}
//otherwise there is no discount.
else {
    console.log(`There is no discount.`);
}

