function greet (){
    console.log("Hello there");
    console.log("I hope youre having a great day");
}
greet();

// for (let i = 0; i < 5; i++){
//     greet();
// }

function greetWithName (name){
    console.log ("Hello " + name + "!");
    console.log ("I hope youre having a great day");
}
greetWithName("Marta");
greetWithName("Edvards");


function greetToElement (name, element){
    element.textContent = `Hello ${name}!`;
    console.log ("Hello " + name + "!");
}

const myOutputElement = document.getElementById("fun-output-id");

greetToElement("Marta", myOutputElement);
greetToElement("Edvards", document.getElementById("fun-output-id-2"));

function greetString(name){
    return `Hello ${name}!`;
}

function greetStringToElement (greeting, element, padding = ""){
    element.textContent += (padding +greeting);
    console.log (greeting);
}
const myGreeting = greetString("Spring");
greetStringToElement (myGreeting, myOutputElement);

function sum(a, b) {
    return a + b;
}
const myCostumGreeting = `Adding 5 and 7 should be ${sum(5, 7)}`;
greetStringToElement (myCostumGreeting, myOutputElement, padding= " 👨‍💻 ");

for (let i = 1; i <= 10; i++){
    greetStringToElement (`Sum of ${i} and ${i} is ${sum(i, i)}`, myOutputElement, padding= " 🧠 ");
}

let counter = 0;
const myIncreaseBtn = document.getElementById("btn-click-increase");

const myCounterElement = document.getElementById("counter-output-id");

function increaseCounter (){
    counter ++;
    myCounterElement.textContent = `Counter is at ${counter}`;
    console.log (`Counter is at ${counter}`);
}
console.log ("Adding event listener to button");
myIncreaseBtn.addEventListener("click", increaseCounter);

const myResetBtn = document.getElementById("btn-click-reset");
 function resetCounter() {
    counter = 0;
    myCounterElement.textContent = `Counter is at ${counter}`;
    console.log (`Counter is at ${counter}`);
 }

 console.log ("Adding event listener to reset button - this time mouse event");
 myResetBtn.addEventListener("mouseup", resetCounter);




 
 const myBodyElement = document.body;
 function randomColorbackground() {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    myBodyElement.style.backgroundColor = randomColor;
    console.log (`Setting background color to ${randomColor}`);

 }
 console.log ("Adding event listener to body element");
 myBodyElement.addEventListener("click", randomColorbackground);
