var firstName = 'Tremain';
const States = 50;//represents the # of states in the US
var sum = add(5, 4);//function that will calculate the sum of the mentioned #'s
var sayHello = 'Hello World!';// you have to define the name of the function too, if you want the resulting call of the function (the console.log) to show up correctly
var checkAge = checkAge;
var script = 'Hello, World!';
//var getLength = getLength;

var nest = [
    {name: "Charles", age: 21},
    {name: "Abby", age: 27},
    {name: "James", age: 18},
    {name: "John", age: 17},
];

var house = [
    {name: 'Johan', age: 13},
    {name: 'Freeda', age: 16},
    {name: 'Birch', age: 10},
    {name: 'Felicity', age: 25},
    {name: 'Winter', age: 24},
];


console.log(sayHello);
console.log(sum);
console.log(script.length);

var veggietales = [ 'Carrots', 'Broccoli', 'Celery', 'Cucumber', 'Potatoes'];

var count = 0;
while(count< veggietales.length) {
    console.log(veggietales[count]);
    count++;
}

var t=0;
while (t < 4){
    checkAge(nest[t].name, nest[t].age);
    t++;
} //this loop is what the checkage function uses to cycle through the nest array which consists of all of the names and ages.
//t is just a variable to represent where the code should start
//used the parameter (t<4) because I technically only have 3 objects, since list items start at 0.

function add(num1, num2){
    return num1 + num2;
};

function sayHello() {
    return 'Hello World!';
};

function checkAge (name, age) {
    if (age < 21) {
       console.log ('Sorry, ' + name + ' you shall not pass!');
    } //this is the function for the "you aren't old enough to view this page prompt."
}; // I don't have to console.log outside of this because its already being called upon by the 'while' function above.


var t=0;
while (t < 5){
    checkAge(house[t].name, house[t].age);
    t++;
} //this loop is what the checkage function uses to cycle through the nest array which consists of all of the names and ages.
//t is just a variable to represent where the code should start
//used the parameter (t<5) because I technically only have 4 objects, since list items start at 0.



function getLength(script) {
    if (script.length % 2 == 0){
       return ('The world is nice and even!');
    } else {
      return ('The world is an odd place!');
    }
}
console.log(getLength(script));