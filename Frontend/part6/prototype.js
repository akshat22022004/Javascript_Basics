let computer = { cpu: 10}
let lenovo = { 
    screen: "hd",
    __proto__: computer // we can use the property of computer in lenovo using dunder prototype syntax.
    // we access the computer prototype here
};
let tomhardware = {};
console.log(`computer`, lenovo. __.proto__); // cpu = 12; in lenovo now will come 


let genericCar = { 
    tyres : 4,

}
let tesla = {
    driver : 'AI'
}
Object.setPrototypeOf(tesla, genericCar) // here we set the prototype of tesla to genericCar
//  so that we can access the properties of genericCar in tesla
console.log(`tesla `, tesla); // driver: "AI", tyres: 4

console.log(`tesla`, Object.getPrototypeOf(tesla)); // use this tp get the injected property using the prototype






