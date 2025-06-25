let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start : function(){
        return `${this.make} ${this.model} is starting`;
    },
};

console.log(car.start()); // Toyota Corolla is starting

function person(name,age){
    this.name = name;
    this.age = age

    this.describe = function(){
        return `${this.name} is ${this.age} years old`;
    }
}

let person1 = new person("akshat",21);
console.log(person1.describe()); // akshat is 21 years old


// Prototypal Chain


function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`; // we can access anything here and add new prorqerties is called prototypal chain
}

// OOPS

// Classes And Inheritance

 // INHERITANCE 
 class Vehicle { // all functions inside a class is called as methods
    constructor(make,model){
        this.make = make;
        this.model = model  
    }  
    start(){
        return `${this.make} ${this.model} is starting`;
    }
 }
 class Car extends Vehicle{
   drive() {
    return `${this.make} ${this.model} is driving`;
   } 
 }

 let myCar = new car("Honda","Civic");
 console.log(myCar.start()); // Honda Civic is starting
 console.log(myCar.drive()); // Honda Civic is driving

 let vehicleOne = Vehicle("Toyota","Corolla");
 console.log(vehicleOne.start()); // error or undefined without the new keyword.

// Encapsulation

// restrict the direct access to the object data;

class BankAccount {
    #balance = 0; // no one can access it until custom method is provided

    deposit(amount){
    this.#balance += amount
    return this.#balance // no one can access it until custom method is provided
}

getBalance(){
    return `your balance is ${this.#balance}`;
  }
}

let myAccount = new BankAccount();
console.log(myAccount.balance) // undefined due to enscaptulation
console.log(myAccount.deposit(100)); // 100
console.log(myAccount.getBalance()); // your balance is 100


// Abstraction

// hide the implementation details which are complex things
// you may be doing 1000 things i dont need to know how it works

class Coffemachine {
    start(){
        // call db
        // filter value
        return `Starting the machine...`
    }
    brewCoffee(){

    return `Brewing the coffee...`;
    }
    pressStartButton(){
        let mssg1 = this.start();
        let mssg2 = this.brewCoffee();
        return `${mssg1} ${mssg2} Pressing the start button...`;
    }
}
let mymachine = new Coffemachine();
console.log(mymachine.start()); // Starting the machine...
console.log(mymachine.brewCoffee()); // Brewing the coffee...
console.log(mymachine.pressStartButton()); // Pressing the start button...

// polymorphism

// many forms or many shapes or many types

class Bird {
    fly(){
        return "Bird can fly";
    }
}

class penguin extends Bird{
    fly(){
        return "Penguin cannot fly";
    }
}

let bird = new Bird();
let penguin = new penguin();
console.log(Bird.fly()); // Birds can fly
console.log(penguin.fly()); // Penguin cannot fly

// Static method

class calculator { // only class itself call and it is called static method
    static add(a,b){
        return a + b;
    }
}

let minical = new calculator(); // this will throw an error you cannot store in an variable or cannot create an object
console.log(calculator.add(2,3));   // 5    


// getters and setters

class Employee {
    constructor(name,salary){
        if(salary < 0){
            throw new Error("salary cannot be negative");
        }
        this._name = name;
        this._salary = salary;
    }
    
    // getter
    get salary(){
        return `you are not allowed to access the salary`;
    }

    // setter
    set salary(value){
        if(value < 0){
            console.log("salary cannot be negative");
        }else{
            this._salary = value
        }
    }
}
let emp = new Employee("akshat",10000);

// getter
console.log(emp.salary); // you are not allowed to access the salary


// setter
emp.salary = -10000; // setter implemented
console.log(emp.salary); // salary cannot be negative