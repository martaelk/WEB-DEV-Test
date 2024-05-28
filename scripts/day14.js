console.log("Lets add and remove some elements upon user interaction");

function addElement(container, tagName, classes, id, textContent="", bgColor=null){
    console.log(`Calling addElement with tag name ${tagName} and text content ${textContent}`);

    const newElement = document.createElement(tagName);

    newElement.classList.add(...classes);
    newElement.id = id;
    newElement.textContent = textContent;
    if (bgColor){
        newElement.style.backgroundColor = bgColor;
    }
    container.appendChild(newElement);
}


function removeElement(container, id){
    console.log(`Calling removeElement with id ${id}`);
    const elementToRemove = document.getElementById(id);
    container.removeChild(elementToRemove);
}

function addEvenOddElement() {
    elementCounter ++;
    const customClass = elementCounter % 2  === 0 ? "even" : "odd";
    if (customClass === "even") {
        console.log(`Even element, adding background color ${colorPicker.value}`);
        addElement(container, "div", ["boxy", customClass], `element-${elementCounter}`, "This is the element No."+ elementCounter, colorPicker.value);
    }else {
        addElement(container, "div", ["boxy", customClass], `element-${elementCounter}`, "This is the element No."+ elementCounter);
    }
}

const container = document.querySelector("#element-container-1");  
// addElement(container, "div", ["boxy", "cool"], "element-1", "This is the first element");

const addButton = document.querySelector("#add-element-button");  

const colorPicker = document.querySelector("#even-color-picker"); 

let elementCounter = 0;

addButton.addEventListener("click", function(){
    addEvenOddElement();
})

const addMultipleButton = document.querySelector("#add-multiple-elements"); 
const addCountInput = document.querySelector("#add-count"); 

addMultipleButton.addEventListener("click", function() {
    //we will get the value of the input element
    const addCount = parseInt(addCountInput.value); //we need to convert it to integer
    //we will add addCount number of elements to the container
    for (let i = 0; i < addCount; i++) {
        addEvenOddElement();
    }
})

const removeButton = document.querySelector("#remove-element-button"); 

addButton.addEventListener("click", function(){
    if (elementCounter === 0){
        console.log ("No elements to remove");
        return;
    }
    removeElement(container, `element-${elementCounter}`);
    elementCounter --;
})

const removeAllButton = document.querySelector("#remove-all-element-button"); 

removeAllButton.addEventListener("click", function() {
    //good idea to add some safety checks
    // if (elementCounter === 0) {
    //     console.log("No elements to remove!");
    //     return;
    // }
    // //we will remove all elements from the container
    // while (elementCounter > 0) {
    //     removeElement(container, `element-${elementCounter}`); //note how we create the id from the counter
    //     elementCounter--;
    // }
    //above approach worked but we had to follow a counter
    //below approach is generic and will remove all elements of whatever element container
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    elementCounter = 0; //since we use it for followup we should reset it
});