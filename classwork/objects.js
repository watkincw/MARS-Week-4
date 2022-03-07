// !!! OBJECTS !!!

let person = {
    firstName: 'Shane',
    lastName: 'Warne',
    play: () => {
        console.log('All time greats');
    },
};

console.log(person.firstName + ' ' + person.lastName);

person.country = 'Aus';

console.log('Before: ', person);

// delete person.country;
// console.log('After deleting country: ', person);

console.log('lastName' in person);

for (const key in person) {
    console.log(key + ':', person[key]);
};

person.play();


// !!! CONTRUSTOR FUNCTIONS !!!

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getInfo = function() {
        return this.firstName + ' ' + this.lastName + ' age: ' + this.age;
    };
};

let person1 = new Person('Peter', 'Waugh', 34);
let person2 = new Person('John', 'Doe', 31);
let person3 = new Person('Mike', 'Travis', 38);

console.log(person3);

console.log(person1.getInfo());