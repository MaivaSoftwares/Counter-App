let counter = document.getElementById("count-el")
let count = 0;

function increament() {
    count += 1;

    counter.innerHTML = count;
}

let value = document.getElementById("saved")
function save() {
    value.innerText += " " + count + " -";
    count = 0;
    counter.innerText = count;
}

function reset() {
    value.innerText = "Previous entries:";
}