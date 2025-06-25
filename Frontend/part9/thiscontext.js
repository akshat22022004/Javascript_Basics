const person = {
    name : "Akshat",

    greet(){
        console.log(`Hello my name is ${this.name}`);  // will always get the context of Akshat in this
    }
}

person.greet();

const greetfunction  = person.greet; // this will also get the context of person
greetfunction(); //  here it shows undefined because the context is lost because of any other memory location

const boundGreet = person.greet.bind({name : "John"}); // way to bind the context
boundGreet(); // here it knows the context of John