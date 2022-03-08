// // Scoped demonstration
// // let a = 5, b = 10;

// // if (a > b) {
// //     let c = 50; // Scope of c is only within if block
// // } else {
// //     let c = 100;
// // }

// // console.log(c);


// // // Declaration
// // // let
// // let user = 'John';
// // console.log(user);
// // user = 'Mike';

// // console.log(user);

// // // var
// // var user = 'John';
// // var user = 'Mike';

// // console.log(user);


// // // Convention
// // let userProfile; // camelCase


// // // const
// // const COLOR = 'red';

// // console.log(COLOR);


// // console.log('Test'/0); // NaN


// // Nested Expression
// // let a = 10, b = 20;

// // console.log(`Sum of a and b is: ${ a + b }`); // Expression(inside '{}') is always followed by $


// // let age = "Test";

// // console.log(typeof(age));


// // '==' vs. '==='
// // console.log(5 == '5'); // true - 5(number) loosely equals 5(string)
// // console.log(5 === '5'); // false - strict equal(===) forces typeof to match as well as the data itself


// // // Increment
// // let a = 10;
// // console.log(a);
// // console.log(++a); // a++ (increments pre-display)
// // console.log(a++); // a++ (increments post-display)
// // a++;
// // console.log(a);


// // !!! LOOPS !!!

// // let age = 20;

// // if (age > 18 && age > 59) {
// //     console.log('Eligible to vote and pension');
// // } else if (age < 60) {
// //     console.log("Won't get a pension now");
// // } else if (age === 18) {
// //     console.log('You turned 18');
// // } else {
// //     console.log('Not Eligible to vite');
// // };

// // switch(age) {
// //     case 18:
// //         console.log('You turned 18');
// //         break;
// //     case 19:
// //         console.log('Eligible to vote');
// //         break;
// //     default:
// //         console.log('No match');
// // };

// // While Loop 1. Initialization, 2. Condition

// // let count = 0;

// // while (count < 5) {
// //     ++count;
// //     console.log(count);
// // };


// // // String manipulation - targeting partial strings(substrings)
// // let str = 'Hi how are you?';

// // str[0] = 'h';

// // console.log(str[0]);

// // console.log(str.substring(3,10));

// // console.log(str.substr(3,10)); // 'substr' - depricated


// // !!! ARRAYS !!!

// // let names = ['John', 'Mike', 'Peter', 'Kevin'];

// // console.log(names[1]);

// // console.log('Array Length ' + names.length);

// // // for ('each index')
// // for (let i = 0; i < names.length; i++) {
// //     // if the first letter is 'P'
// //     if (names[i].startsWith('P')) {
// //         // continue skips the rest of the logic in the for loop, in this case, if the if statement condition( (names[i].startsWith('P')) ) is met
// //         continue;
// //     };

// //     // clog the indexes that make it to this point in the function
// //     console.log(names[i]);
// // };

// // // '.pop()' - removes the highest index
// // console.log(names);
// // console.log(names.pop());
// // console.log(names);

// // // .push - appends another index to the array
// // console.log(names);
// // names.push('Sara');
// // console.log(names.push('Sara'));
// // console.log(names);

// // // '.shift()' - removes index 0
// // // '.unshift()' - inserts an new value as index 0, shifting/incrementing all previous indexs by 1
// // console.log(names);
// // names.shift();
// // console.log(names);
// // names.unshift('Sara');
// // console.log(names);

// // // '.slice()' - Returns a copy of the array at only the indexs specified in the params
// // console.log(names);
// // names.slice(0,3);
// // console.log(names.slice(1,3));
// // console.log(names);

// // for (let name of names) {
// //     console.log(name);
// // };

// // names[36] = 'Test';
// // console.log(names);
// // console.log(names.length);


// // // !!! FUNCTION DECLARATION !!! 
// // function hello() {
// //     console.log('hello');
// // };

// // // !!! FUNCTION EXPRESSION !!!
// // let hello = function() {
// //     console.log('Hello');
// // };

// // console.log(typeof hello);
// // hello();

// // !!! CALLBACK FUNCTIONS !!!

// // // // !!! ARROW FUNCTION !!!
// // // function declaration
// // function test0(a, b) {
// //     let c = a + b;
// //     return c;
// // };
// // console.log(test0(1, 1));
// // console.log(typeof test0);

// // // function expression
// // let test = function(a, b) {
// //     let c = a + b;
// //     return c;
// // };
// // console.log(test(10, 10));
// // console.log(typeof test);

// // // arrow function
// // let test1 = (a, b) => {
// //     let c = a + b;
// //     return c;
// // };
// // console.log(test1(20, 20));
// // console.log(typeof test1);

// // // the three above function output the same results


// // // declare numbers varriable equal to an array
// // let numbers = [12, 23, 18, 26, 40];

// // console.log('Original numbers Array: ' + numbers);

// // // '.filter()' - creates a new array with all elements that pass the test implemented by the provided function
// // let evenNumbers = numbers.filter(getEven);

// // function getEven(num) {
// //     return num%2 == 0;
// // };

// // console.log('Filtered Only Even Numbers Within the numbers Array: ' + evenNumbers);

// // // '.map()' - creates a new array populated with the results of calling a provided function on every element in the calling array
// // let squaredNum = numbers.map(getSquared);

// // function getSquared(num) {
// //     return num * num;
// // };

// // console.log('Each Number in the numbers Array Squared: ' + squaredNum);

// // // '.reduce()' - executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value
// // let sum = numbers.reduce(getSum, 0);

// // function getSum(total, sum) {
// //     return total + sum;
// // };

// // console.log('Sum of All Numbers in the numbers Array: ' + sum);



// // !!! OBJECTS !!!

// // let person = {
// //     firstName: 'Shane',
// //     lastName: 'Warne',
// //     play: () => {
// //         console.log('All time greats');
// //     },
// // };

// // console.log(person.firstName + ' ' + person.lastName);

// // person.country = 'Aus';

// // console.log('Before: ', person);

// // // delete person.country;
// // // console.log('After deleting country: ', person);

// // console.log('lastName' in person);

// // for (const key in person) {
// //     console.log(key + ':', person[key]);
// // };

// // person.play();


// // // !!! CONTRUSTOR FUNCTIONS !!!

// // function Person(firstName, lastName, age) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.getInfo = function() {
// //         return this.firstName + ' ' + this.lastName + ' age: ' + this.age;
// //     };
// // };

// // let person1 = new Person('Peter', 'Waugh', 34);
// // let person2 = new Person('John', 'Doe', 31);
// // let person3 = new Person('Mike', 'Travis', 38);

// // console.log(person3);

// // console.log(person1.getInfo());


// // !!! 'this' KEYWORD !!!


// // function f() {
// //     return this;
// // };

// // console.log(f());

// // let person = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     f: function getDetail() {
// //         return this.firstName + ' ' + this.lastName;
// //     },
// //     foo: function() {
// //         const baz = () => this;
// //         return baz();
// //     },
// //     bar: () => this
// // };

// // console.log(person.foo);
// // console.log(person.bar);



// class Person {
//     #name
//     #age
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     set name(name) {
//         console.log('Setter method is called...');
//         if (name === '') {
//             console.log('Username cannot be empty.');
//         } else {
//             this.#name = name;
//         }
//     }
//     get name() {
//         return this.#name;
//     }
//     set age(age) {
//         if (age === '') {
//             console.log('Age cannot be left blank');
//         } else {
//             this.#age = age;
//         }
//     }
//     get age() {
//         return this.#age;
//     }
// };

// const person1 = new Person('Tony', 53);
// console.log(person1.age);
// console.log('Before: ' + person1.name + ', ' + person1.age);
// person1.name = 'Dave';
// person1.age = 36;
// console.log('After: ' + person1.name + ', ' + person1.age);


// !!! ARRAY DESTRUCTURING !!!

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