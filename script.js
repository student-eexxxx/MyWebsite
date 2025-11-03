console.log("Привет, мир!");

let userName = "Егор";
const appName = "Моя визитка";
let age = 18;
let isStudent = true;
console.log(userName, appName, age, isStudent);

const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", function () {
    alert("Кнопка нажата!");
});

let user = prompt("Как вас зовут?");
if (user && user.trim() !== "") {
    alert("Привет, " + user + "!");
} else {
    alert("Привет!");
}
let clicks = 0;
const btn = document.getElementById('counterBtn');
const out = document.getElementById('clicks-view');
if (btn && out) {
    btn.addEventListener('click', () => {
        clicks += 1;
        out.textContent = clicks;
        console.log('Кликов:', clicks);
    });
}