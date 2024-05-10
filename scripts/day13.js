console.log("Started our script");

// function mainFunction (){
//     console.log("Also DOM fully loaded and parsed");
// }
// document.addEventListener ("DOMContentLoaded", mainFunction);

// document.addEventListener ("DOMContentLoadeed", (event) =>{
//     console.log("DOM fully loaded and parsed");
//     console.log(`Event type is ${event.type}`);
// });


const inputElement = document.getElementById("input-change");
const inputElement2 = document.getElementById("input-change-2");
const outputElement = document.getElementById("input-output-id");

// inputElement.addEventListener("input", (event) => {
//     console.log("input event happend");
//     console.log(`Event type is ${event.type}`);
//     console.log(`Input value is ${inputElement.value}`);
//     console.log(`Input value from event is ${event.target.value}`); //this is the most reliable
// })

function logSomeEvent (event){
    console.log(`Event type is ${event.type}`);
    console.log(`Input value from event is ${event.target.value}`);
    outputElement.textContent = `Combined value is ${inputElement.value} ${inputElement2.value}`
}

inputElement.addEventListener("input", logSomeEvent);
inputElement2.addEventListener("input", logSomeEvent);



function logChangeEvent(event){
    console.log("Calling logChangeEvent");
    console.log(`Event type is ${event.type}`);
    console.log(`Input value from event is ${event.target.value}`);
}
inputElement.addEventListener("change", logSomeEvent);
inputElement2.addEventListener("change", logSomeEvent);

const numberInputElement1 = document.getElementById("number-1");
const numberInputElement2 = document.getElementById("number-2");
const outputNumberElement = document.getElementById("number-output");

function handleNumberInput(event){
    console.log("Calling handleNumberInput");
    console.log(`Event type is ${event.type}`);
    console.log(`Input value from event is ${event.target.value}`);
    
    const concatenation = numberInputElement1.value + numberInputElement2.value;
    const number1 = parseFloat(numberInputElement1.value);
    const number2 = parseFloat(numberInputElement2.value);
    const sum = number1 + number2;

    outputNumberElement.value = sum;
    outputElement.textContent = `Concatenation is ${concatenation} and sum is ${sum} `;
}
numberInputElement1.addEventListener("input", handleNumberInput);
numberInputElement2.addEventListener("input", handleNumberInput);

const generateButton = document.getElementById("btn-add-element");
const containerElements = document.getElementsByClassName("element-container");
const containerElement = containerElements[0];

function generateNewElement(){
    console.log("Calling generateNewElement");

    const newElement = document.createElement("p");
    counter ++;
   
    newElement.textContent = `Element No. ${counter}`;
    newElement.classList.add("new-p-element");
    if (counter % 2 === 0){
        newElement.classList.add("new-p-element-even");
    }else{
        newElement.classList.add("new-p-element-odd");
    }
    containerElement.appendChild(newElement);
}

generateButton.addEventListener("click", generateNewElement);

console.log("Our script is loaded");