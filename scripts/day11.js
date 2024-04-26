console.log("Let's do some looping");

let i = 0;
while (i < 5) {
    console.log("While loop iteration", i);
    i++;
}
console.log("After while loop i is", i);

let floor = 9;
while (floor >= 0) {
    console.log ("Floor", floor);
    floor--;
}
console.log("We are at the ground floor", floor);

let j = 0;
while (j<10){
    console.log("While loop iteration", j);
    j += 2;
}
console.log("After while loop j is", j);

const start = 200;
const stop = 250;
const step = 10;
let k = start;
while (k < stop) {
    console.log("While loop iteration", k);
    k += step;
}
console.log("After while loop k is", k);

let m = 0;
const dowhileLoopOutput = document.getElementById("doWhileLoopOutput");

do {
    console.log ("Do while loop iteration", m);
    dowhileLoopOutput.innerHTML += `Do while loop iteration ${m} <br>`;

    m++
}while (m < 5);
console.log("After do while loop m is", m);

let n = 9000;
while(true) {
    console.log("While loop iteration", n);
    n ++;
    if (n >= 6){
        console.log("I want to break free because n is", n);
        break;
    }
}
console.log("After break while loop n is", n);

for (let i = 100; i < 103; i++){
    console.log("For loop iteration", i);
}
console.log("After for loop i is", i);

for (let i = 10; i >= 0; i -= 2){
    console.log("For loop iteration", i);
}
console.log("After for loop i is", i);


const day = new Date().getDay();
switch (day){
    case 0:
        console.log("Sunday");
        switchOutput.innerText = "Sunday";
        break;
    case 1:
        console.log("Monday");
        switchOutput.innerText = "Monday";
        break;
    case 2:
        console.log("Tuesday");
        switchOutput.innerText = "Tuesday";
        break;
    case 3:
        console.log("Wednesday");
        switchOutput.innerText = "Wednesday";
        break;
    case 4:
        console.log("Thursday");
        switchOutput.innerText = "Thursday";
        break;
    case 5:
        console.log("Friday");
        switchOutput.innerText = "Friday";
        break;
    case 6:
        console.log("Saturday");
        switchOutput.innerText = "Saturday";
        break;
    default:
        console.log("Uknown day");
        switchOutput.innerText = "Uknown day - ALIENS";
}