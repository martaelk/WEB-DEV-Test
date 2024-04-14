console.log("Starting our script");

console.log(new Date());


const creatorElement = document.getElementById("creator");
creatorElement.style.backgroundColor ="yellow";

const firstName = "Marta";
const lastName = "Kivkule";
const fullName = firstName + " "+ lastName;
// creatorElement.textContent = "Created by Marta Kivkule"
creatorElement.textContent = `Created by ${fullName}`;

const myDate = document.getElementById("creation-date");
myDate.style.backgroundColor="red";
myDate.textContent = new Date();

const currentYear = new Date().getFullYear();
console.log ("Current years is", currentYear);

const futureYear = currentYear + 100;
console.log("Years in 100 years will be", futureYear)

console.log("22"+1);
console.log(parseInt("22")+1);
console.log(22+1);









console.log("Ending our script");