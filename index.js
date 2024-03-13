// array 

let gemsCabochon = ["coral", "turquoise", "opal"];
console.log(gemsCabochon);
console.log(gemsCabochon[0]);
console.log(gemsCabochon[4]);

gemsCabochon[0] = "non-coral";
console.log(gemsCabochon);
gemsCabochon[0] = "coral";
console.log(gemsCabochon);

gemsCabochon.push("blue sapphire");
console.log(gemsCabochon);
gemsCabochon.pop();
console.log(gemsCabochon);
gemsCabochon.unshift("blue sapphire");
console.log(gemsCabochon);
gemsCabochon.shift();
console.log(gemsCabochon);

let lengthGemsCabochon = gemsCabochon.length;
console.log(lengthGemsCabochon);
let indexGemsCabochon = gemsCabochon.indexOf("");
console.log(indexGemsCabochon);

// get current year 
var currentDate1 = new Date();
console.log(currentDate1);
document.getElementById("currentDateTime1").textContent = currentDate1;

// callback 

let x = document.getElementById("votre-nom-famille-input");
let y = document.getElementById("votre-nom-input");

sum(displayPage, x, y);

function sum(callback, x,y) {
    document.getElementById("votre-nom-btn").onclick = function(){
        let result = x.value + " " + y.value;
        callback(result);
    }

}

function displayConsole(result) {
    console.log(result);
} 

function displayPage(result) {
    document.getElementById("salutation").textContent = "bonjour " + result;
}