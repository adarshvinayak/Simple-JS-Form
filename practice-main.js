//strings
console.log("----STRINGS----")

const name = 'John Leanord'
const age = 30

//concat output
hello =`My name is ${name} and I am ${age}`
console.log(hello)
// string functions
console.log("----STRING FUNCTIONS----")

console.log('lenght is '+ name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,4))
console.log(name.split(''))

//Arrays
console.log("----ARRAYS----")
const numbers = new Array(0,1,2,3,4,5) //using constructor
const fruits = ['orange', 'apple', 100, false]

fruits.pop() //delete last value from the array
fruits.push('mangoes') //add new val to end of the array
fruits.unshift('strawberry') //add to the beginning of the array

console.log(fruits)
console.log('Is "fruits" an array? -- '+Array.isArray(fruits))
console.log('Apple is in the location '+ fruits.indexOf('apple'))
console.log('Eat '+fruits[2])

//Object Literals
console.log("----OBJECT LITERALS/KEY-VAL PAIRS----")
const person = {
    firstName  : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies : ['music', 'movies', 'reading'],
    address : {
        houseNumber : 261,
        street : '14th main st',
        city : 'Chicago',
        state : 'IL',
        country : 'USA'
    }
}

person.email= 'john@email.com'


console.log(`${person.firstName} stays in ${person.address.state, person.address.country} and his favorite hobby is ${person.hobbies[1]}`)
// Destructuring or pulling out the variables from the class
const{firstName,lastName,email, address: {city}} = person 
console.log(firstName) //Destructuring lets us print wihtout calling the main class
console.log(city)
console.log(email)


//Array of objects
console.log("----Array of objects----")
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isDone: false
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isDone: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isDone: false
    }
];
console.log(todos)
console.log(todos[2])
console.log(todos[1].text, todos[1].isDone);

// convert to JSON within the script (can also be done online)
console.log("----JSON convert----")
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//LOOPS
console.log("----LOOPS----")

for(let i=0; i<10; i++){
    console.log(`for counter ${i}`)
}

let i = 0
while(i<10){
    console.log(`while counter ${i}`)
    i++
}

//iterate through array todos
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text)
}

for(let val of todos) {
    console.log(val.isDone)
}

//preferred loops---forEach, map, filter

todos.forEach( function(todo) {console.log(todo.text)} ) 

const todoMapText = todos.map( function(todo) {return todo.isDone} ) //returns an array
console.log(todoMapText)

todoFilterText = todos.filter( function(val) { //returns if true
    return val.isDone===false;
}).map(function(val){
    return val.text;
}) 

console.log(todoFilterText)

//CONDITIONALS
console.log("----CONDITIONALS----")

const x = '10'
const y = 10
if (x===10 && y==10) {
    console.log('x is 10')
} else {
    console.log('x is not 10')
}

const color = y > 5 ? 'red' : 'blue'
console.log(color)

switch(color){
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    case 'green':
        console.log('color is green')
        break
}

//FUNCTIONS
console.log("----FUNCTIONS----")
//>>>>> Normal func
function addNums(num1=1, num2=1) {
    return(num1 + num2);
}

console.log(addNums(5,5))

//>>>>> Arrow func
const mulNums = (num11 = 1, num22 = 1) => num11*num22
console.log(mulNums(5,5))

todos.forEach ((todo) => console.log(todo))


//OOP
console.log("----OOP----")
//---------------constructor & func in a func------------------------ 
function Person(firstName, lastName, dob) { //constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //convert input date string to Date object
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}


const person1 = new Person('John', 'Doe', '4-3-1998') //instantiate objects
const person2 = new Person('Mary', 'Smith', '1-24-1999')
const person3 = new Person('Diane', 'Lee', '8-9-2002')

console.log(person2.getFullName(), person2.getBirthYear())


//-------------------prototype function------------------------
function Person1(firstName, lastName, dob) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
}

Person1.prototype.getBirthYear = function() { //used instead of func in a func
    return this.dob.getFullYear();
}

Person1.prototype.getFullName = function() { 
    return `${this.firstName} ${this.lastName}`
}

const person11 = new Person1('John', 'Doe', '4-3-1998') //instantiate objects
const person22 = new Person1('Mary', 'Smith', '1-24-1999')
const person33 = new Person1('Diane', 'Lee', '8-9-2002')

console.log(person11)

//Class------------------Same functionality as functions

/*class Human {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); 
    }

    getBirthYear() {  //prototypes are a bit different
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}*/


//DOM
console.log("----DOM----")
//DOM
//Single element selector
const form = document.getElementById('my-form')
console.log(form)

const query = document.querySelector('.msg')
console.log(query)

//Multiple element selector
console.log(document.querySelectorAll('.item')); //reccomended - can use is as an array
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))

//looping
const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

//manipulating the DOM
const ul = document.querySelector('.items')
ul.lastElementChild.remove() //remvove item 3
ul.firstElementChild.textContent = 'Hello' //Edit first element of the list 
ul.children[1].innerText = 'Welcome'
ul.lastElementChild.innerHTML = '<h1> WELCOME </h1>'

const btn = document.querySelector('.btn')
btn.style.background = 'green'

btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-white');
    document.querySelector('.items').firstElementChild.innerHTML = '<h1>SUCCESS</h1>'
})

btn.addEventListener('mouseover', (e) => {
    document.querySelector('.btn').style.background = 'red'
    
})

btn.addEventListener('mouseout', (e) => {
    document.querySelector('.btn').style.background = 'green'
    
})