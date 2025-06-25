// checking which number is less or greater

let num1 = 2;
let num2 = 3;
if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
}
else{
    console.log(num2 + " is greater than " + num1);
}

// checking string 

let name1 = "akshat";
let name2 = "hitesh";
if(name1 > name2){
    console.log(name1 + " is greater than " + name2);
}
else{
    console.log(name2 + " is greater than " + name1);
}

// checking if a variable is a number or not

let val = 22;
if(typeof val === "number"){
    console.log(val + " is a number");
}
else{
    console.log(val + " is not a number");
}

let items = [1, 2, 3, 4, 5];

if(items.length > 3){
    console.log("The array has more than 3 elements");
}
else{
    console.log("The array has less than 3 elements");
}

