console.log("Day10-Conditionals");
const el = document.getElementById("output");
el.style.borderWidth = "3px";
el.textContent = 5 > 3;

// el.innerHTML = "5 > 3: "+ (5 > 3) + "<br>";

let element = document.getElementById("comparison1")
element.textContent = 5 > 3;

element = document.getElementById("comparison2")
element.textContent = 5 < 3;

element = document.getElementById("comparison3")
element.textContent = 5 == 3;

element = document.getElementById("comparison4")
element.textContent = 5 != 3;

element = document.getElementById("comparison5")
element.textContent = 5 === 3;

element = document.getElementById("comparison17")
element.textContent = "22" == 22;
element = document.getElementById("comparison18")
element.textContent = "22" === 22;

element = document.getElementById("boolean1");
element.textContent = true && true;

element = document.getElementById("boolean6");
element.textContent = true || false;

element = document.getElementById("boolean9");
element.textContent = !true;
element = document.getElementById("boolean10");
element.textContent = !false;

let a = 5;
let b = 3;

if (a > b) {
    console.log("a is greater than b", a, b, a > b);
    el.style.backgroundColor = "lightgreen";
} else {
    console.log("a is not greater than b", a, b, a > b);
    el.style.backgroundColor = "orange";
}
a = 300;
if (a > b) {
    console.log("a is greater than b", a, b, a > b);
    el.style.backgroundColor = "white";
} else if (a < b){
    console.log("a is less than b", a, b, a < b);
    el.style.backgroundColor = "yellow";
} else {
    console.log("a is equal to b", a, b, a == b);
    el.style.backgroundColor = "aqua";
}