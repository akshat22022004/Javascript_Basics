function person (name,age){
    this.name = name;
    this.age = age
}

person.prototype.greet = function(){ // we can add any function in the prototype
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}

let hitesh = new person("hitesh", 21);
hitesh.greet(); // Hello my name is hitesh and I am 21 years old