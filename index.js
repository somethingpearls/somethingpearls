// get current year 
var currentDate1 = new Date();
console.log(currentDate1);
document.getElementById("currentDateTime1").textContent = currentDate1;

// callback , arrow function 

let x = document.getElementById("votre-nom-famille-input");
let y = document.getElementById("votre-nom-input");

document.getElementById("votre-nom-btn").onclick = function(){
    const yourName = x.value + " " + y.value;
    console.log(yourName);
    document.getElementById("salutation").innerHTML = `bonjour ${yourName} mon ami ;) ` ; 
}
const yourName = x.value + " " + y.value;
const salutation2 = yourName => `mon ami ${yourName} qu'est ce que vous voulez faire aujourd'hui? `
document.getElementById("salutation2Html").innerHTML = salutation2(yourName);

// loop through an array , sort , 2D array, spread operator , 

let names = ['yuru', 'yui', 'ayuka', 'mippo', 'ayumi', 'mako', 'mio', 'sunakshi', 'yuanyuan', 'yuhan', 'fiona', 'miss', 'bea', 'wu', 'iyo', 'chao', 'tsugumi', 'cody', 'bear', 'phyllis', 'weiling', 'fczy'];
let namesNewCuteFriends = ['yuyu', 'nana', 'yoyo', 'haha', 'lolo', "beaucoup d'autres à venir"];
let namesAllCuteFriends = [...names, ...namesNewCuteFriends];


function displayNameCuteFriends() {
    let namesCuteFriendList = namesAllCuteFriends.sort();
    let namesListHtml = "";
    for (let oneName of namesCuteFriendList) {
        namesListHtml += "<li>" + oneName + "</li>";
    }
    console.log(namesListHtml);
    document.getElementById("namesCuteFriends").innerHTML = "mes amis sont :" + "<ul class='horizontal-list'>" + namesListHtml + "</ul>";
}

document.getElementById("namesCuteFriendsBtn").onclick = displayNameCuteFriends ; 

// array.filter() = 
// pricings = 10000, 20000, 30000, 40000, 50000, 60000 

let prices = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000]; 
let middlePrice = prices.filter(checkPrice);
middlePrice.forEach(print);

function checkPrice(element){
    return element >= 30000; 
}
function print(element){
    console.log(element);
}

function displayPrice () {
    let priceBiggerThanJPY3W = prices.filter(checkPrice); 
    console.log(priceBiggerThanJPY3W);
    document.getElementById("checkPriceLabel").innerHTML = "les prix supérieurs à 30000 JPY sont: " + priceBiggerThanJPY3W.join(",") + "." ;
}


document.getElementById("cehckPriceBtn").onclick = displayPrice ; 

// array.reduce() = to sum up 
let checkOutPrices = [6000, 8000, 9900, 13000];
let total = checkOutPrices.reduce(checkOut); 

function checkOut(total, element) {
    return total + element; 
}

function displayCheckOutprice() {
    let checkOutPrice = total; 
    console.log(total);
    document.getElementById("checkOutPriceLabel").innerHTML = "le prix total: JPY" + total + "." ; 
}

document.getElementById("checkOutPriceBtn").onclick = displayCheckOutprice ;

// sort an array of numbers array.sort()

checkOutPrices = checkOutPrices.sort(descendingSort); 
checkOutPrices.forEach(print);

function descendingSort(x, y) {
    return y - x ;
};

function print(element){
    console.log(element);
}

function displayCheckOutPricesDes() {
    let checkOutPriceDes = checkOutPrices.sort(descendingSort); 
    console.log(checkOutPriceDes);
    document.getElementById("checkOutPriceDesLabel").innerHTML = "la commande la plus chère -> la commande la moins chère: JPY" + checkOutPriceDes.join("> JPY") + "."; 
}

document.getElementById("checkOutPriceDesBtn").onclick = displayCheckOutPricesDes;

// traditional function expression = unique expression one time use 
const checkProductDescription = function() {
    return "c'est une bage en or 18carats"; 
}

function displayProductDescription() {
    let displayProductDescriptionText = checkProductDescription();
    console.log(displayProductDescriptionText); 
    document.getElementById("checkPrdocutDescriptionLabel").textContent = "description du produit: " + displayProductDescriptionText + "." ; 
}

document.getElementById("checkPrdocutDescriptionBtn").onclick = displayProductDescription;

// arrow function 

// const greeting = (username) => console.log(`bonjour ${username}`);
//greeting('yuru');


