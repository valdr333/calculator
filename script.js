const add = function(a, b) {
    return a+b;
}
const subtract = function(a, b) {
    return a-b;
}
const multiply = function(a, b) {
    return a*b;
}
const divide = function(a, b) {
    return a/b;
}
const operate = function(a, o, b) {
    if (o == "+") add(a, b);
    else if (o == "-") subtract(a, b);
    else if (o == "x") multiply(a, b);
    else if (o == "÷") divide(a, b);
}

buttons = document.querySelector(".buttons");
let rows = [];
for (let i = 1; i < 6; i++) {
    const div = document.createElement("div");
    div.classList.add("row" + i);
    div.classList.add("allRow");
    buttons.appendChild(div);
    rows[i-1] = document.querySelector(".row"+i)
}

for (let i = 0; i < 5; i++) {
    if (i == 0) {
        const ac = document.createElement("p");
        ac.textContent = "AC";
        const division = document.createElement("p");
        division.textContent = "÷";
        rows[i].appendChild(ac);
        rows[i].appendChild(division);
    } else if (i == 4) {
        const nula = document.createElement("p");
        nula.textContent = 0;
        const equal = document.createElement("p");
        equal.textContent = "=";
        rows[i].appendChild(nula);
        rows[i].appendChild(equal);
    } else {
        let k = 3 * i
        for (let j = 0; j < 3; j++) {
            const p = document.createElement("p");
            p.textContent = 10-k;
            rows[i].appendChild(p);
            k--;
        }
        if (i == 1) {
            const operation = document.createElement("p");
            operation.textContent = "x";
        } else if (i == 2) {
            const operation = document.createElement("p");
            operation.textContent = "-";
        } else if (i == 3) {
            const operation = document.createElement("p");
            operation.textContent = "+";
        }
        rows[i].appendChild(operation);
    }
}