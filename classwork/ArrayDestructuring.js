// function getValues() {
//     // return [10, 20, 30, 40, 50];
//     return null;
// };

// // let [x, y, z, ...args] = getValues();

// let [x = 1, y = 2, z = 3, t = 12, ...args] = getValues() || [];

// // console.log(x);
// // console.log(y);
// // console.log(z);
// // console.log(t);


// let a = 50, b = 100;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     // middleName: 'C.',
//     // currentAge: 28
// };

// let {firstName, lastName, middleName = '-', currentAge = 18 } = person;

// console.log('middleName ' + middleName);
// console.log(currentAge);
// // console.log('Age ' + age1);

// let display = ({firstName, lastName}) => console.log(firstName, lastName);

// let person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     middleName: 'C.'
// };

// display(person1);

// exorcise
function getColors() {
    return ['white', 'blue', 'yellow', 'black', 'red', 'green'];
};

let [firstColor, secondColor, ...otherColors] = getColors();

console.log(firstColor, secondColor, otherColors);
console.log(otherColors);
console.log(typeof otherColors);
console.log("words" + otherColors);
console.log(typeof("word" + otherColors));

// // exorcise 2
// const myClasses = {
//     firstHour: 'Ethics',
//     secondHour: 'Programming',
//     thirdHour: 'Biology'
// };

// let displayClass = ({secondHour}) => console.log('Time to go to ' + secondHour + ' class');



// // Assignment
// const sales = [
//     { item: 'PS4 Pro', stock: 3, original: 399.99 },
//     { item: 'Xbox One', stock: 1, original: 499.99, discount: 0.1 },
//     { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//     { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//     { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];

// // Pass another {object} into the array

// [
//     {
//         item: 'PS4 Pro',
//         stock: 
//     }
// ]

(function(a) {
    console.log(a*a);
})(8);