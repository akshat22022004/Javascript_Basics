function fetchData(){
    return new Promise((resolve,reject) => { // takes a callback function
        setTimeout(() => { // take sometime to fetch
            let success = true;
            if(success){
                resolve("Data is fetched");
            }   
            else{
                reject("Data is not fetched");
            }
        },3000);
    })
}

// Chaining promises
let response = fetchData();
  // resolve is related to .then
  // reject is related to .catch
 response.then((value) => { // .then is for success // there is a callback function here
    console.log(value);
 }).catch((error) => {  // .catch is for error  // there is a callback function here
    console.log(error);
 })  

// Promise.all() waits till all the promises are resolved or rejected

Promise.all([fetchData(),fetchData()]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})