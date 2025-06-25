alert("connected");
// event listening => any event which is triggered by the user

// Dom manipulation 
// two parts => event lsitening and performing actions


// event listening

// example 1

// event listner takes two parameters and it takes what event it takes and what function i can call

// change text is an higher order function here

 let hold = document.getElementsById('changeTextButton').addEventListener('click', changeText); 
 // any buttons's on the page who has this id is now accessed
 // we can place chane of events and can combine them together and can add multiple events
 // we can also add event to any element we want

 document.getElementById("change").addEventListener("click", () => {
     console.log(this); // this here in the function is an arrow function so it cares about the global context here    
 })

 // grabbing a paragraph
 let paragraph = document.getElementById('paragraph');
 paragraph.addEventListener('click',() => {
     console.log(this); // this here in the function is an arrow function so it cares about the global context here    
     console.log(paragraph); 

     // this is the manipulation part of the dom manipulation
     paragraph.style.color = "red"; // we can change the style of the paragraph (css)
     paragraph.innerHTML = "I have been changed"; // we can also change the inner html also here of the paragraph
 })

 // traversing the dom
 // example 2


 // here we get the values by the classname here
 let listItems = document.getElementsByClassName('listItem');
 console.log(listItems);

 for(let i = 0; i < listItems.length; i++){
     listItems[i].addEventListener('click', () => {
         console.log(this); // this here in the function is an arrow function so it cares about the global context here    
         console.log(listItems[i]); 
         listItems[i].style.color = "red"; // we can change the style of the paragraph (css)
         listItems[i].innerHTML = "I have been changed"; // we can also change the inner html also here of the paragraph
     })
 }

 // manipulating the dom elements
 // example 3

 let list = document.getElementById("list");
 list.addEventListener("click", () => {
     console.log(this); // this here in the function is an arrow function so it cares about the global context here    
     console.log(list); 
     list.style.color = "red"; // we can change the style of the paragraph (css)
     list.innerHTML = "I have been changed"; // we can also change the inner html also here of the paragraph
 })

 document.getElementById("changeOrder").addEventListener("click", () => {
     let coffetype = document.getElementById("coffetype");
     coffetype.textContent = "Espresso";
     coffetype.style.backgroundColor= "red";
     coffetype.style.padding = "10px";
 })
 

 // creating and inserting elements
 // example 4
document.getElementById("addNewItem").addEventListener("click", () => {

    // this two lines are the part of creating of node and inserting it into the dom
    let tasklist = document.createElement('li')
    tasklist.textContent = "egg"
    document.getElementById("shopping list").appendChild(tasklist); // appending the node here

})

// removing elements
// example 5
document.getElementById("removeItem").addEventListener("click", () => {
    let tasklist = document.querySelectorById("li")
    tasklist.remove() // will remove the task list here 
    tasklist.lastElementChild.remove() // this will grab the last child and remove it
    tasklist.firstElementChild.remove() // this will grab the first child and remove it
})


 // event handling in the dom
 // example 6

 document.getElementById("changeTextButton").addEventListener
 ("click", () => {  // instead of click we can also use double click here with ease
     alert("chai aaur code");
 });

 // event delegation => delegating the event
 // example 7

 document.getElementById("list").addEventListener("click", (e) => {
     if(e.target.className === "listItem"){ // to avoid the extra matches and access only required one
         e.target.style.color = "red";
     }
 })

 document.getElementById("teaList").addEventListener
 ("click", (event) => {
    if(event.target && event.target.matches(".teaitem")){
        event.target.style.color = "red"; 
    }  // this will give the target of the event   
 })

 // form handling
 // example 8

 document.getElementById("submit").addEventListener("click", () => {
    alert("form submitted");
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;
     console.log(name,email,password);

 });


 // dom content load
 // example 9

 document.addEventListener("DOMContentLoaded", () => { // we can directly put the event listner on the dom content or document
    document.getElementsById("changeTextButton").addEventListener("click", changeText);
    console.log("DOM content loaded");
 })

 // css class manipulation
 // toggle the highlight
 document.getElementById("highlight").addEventListener("click", () => {
     
     let descriptiontext = document.getElementById("description"); // this will grab the element and here we toggle the class similar to  the dark mode and light mode.
     descriptiontext.classList.toggle("highlight"); // this will toggle the class
 })


 // always remember html collection is a node list it is not an array always keep in mind.
 




