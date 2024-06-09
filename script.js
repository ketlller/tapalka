let button = document.querySelector(".button");
let countTxt = document.querySelector(".count__txt");

let tapIncomeTxt = document.querySelector(".tap-income");
let coinsForUpTxt = document.querySelector(".coins-for-up");
let hourIncomeTxt = document.querySelector(".hour-income")

let currentEnergyTxt = document.querySelector(".current-energy");
let maxEnergyTxt = document.querySelector(".max-energy");

let maxEnergy = 1000;
let coinsForUpgrade = 1000;

function fillLocalStorage(key) {
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, 0);
    }

}

if (localStorage.getItem("tap-income") === null) {
    localStorage.setItem("tap-income", 1);
}

if (localStorage.getItem("current-energy") === null) {
    localStorage.setItem("current-energy", maxEnergy);
}

if (localStorage.getItem("coins-for-up") === null) {
    localStorage.setItem("coins-for-up", 1000);
}


setInterval(function refillEnergy() {
    let currentEnergy = +localStorage.getItem("current-energy");
    if (currentEnergy <= maxEnergy - 3) {
        currentEnergy += 3;
        localStorage.setItem("current-energy", currentEnergy);
        currentEnergyTxt.textContent = localStorage.getItem("current-energy")
    } else {
        localStorage.setItem("current-energy", maxEnergy);
        currentEnergyTxt.textContent = localStorage.getItem("current-energy")
    }
}, 3000)

currentEnergyTxt.textContent = localStorage.getItem("current-energy")

fillLocalStorage("coin-count");
fillLocalStorage("hour-income");


countTxt.textContent = localStorage.getItem("coin-count");
tapIncomeTxt.textContent = localStorage.getItem("tap-income");
coinsForUpTxt.textContent = localStorage.getItem("coins-for-up");
hourIncomeTxt.textContent = localStorage.getItem("hour-income");


button.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (+localStorage.getItem("current-energy") >= localStorage.getItem("tap-income")) {
        let currentEnergy = +localStorage.getItem("current-energy");
        currentEnergy -= +localStorage.getItem("tap-income");
        currentEnergyTxt.textContent = currentEnergy;
        localStorage.setItem("current-energy", currentEnergy);


        let count = +localStorage.getItem("coin-count");
        count += +localStorage.getItem("tap-income");
        localStorage.setItem("coin-count", count)
        countTxt.textContent = localStorage.getItem("coin-count");
    }


});