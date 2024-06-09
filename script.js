let button = document.querySelector(".button");
let countTxt = document.querySelector(".count__txt");

if (localStorage.getItem("coin-count") === null) {
    localStorage.setItem("coin-count", 0);
}

countTxt.textContent = localStorage.getItem("coin-count");

button.onclick = function () {
    let count = localStorage.getItem("coin-count");
    count++;
    localStorage.setItem("coin-count", count)
    countTxt.textContent = localStorage.getItem("coin-count");

}