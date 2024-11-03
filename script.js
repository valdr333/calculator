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
        const ac = document.createElement("button");
        ac.textContent = "AC";
        const division = document.createElement("button");
        division.textContent = "÷";
        rows[i].appendChild(ac);
        rows[i].appendChild(division);
    } else if (i == 4) {
        const nula = document.createElement("button");
        nula.textContent = 0;
        const equal = document.createElement("button");
        equal.textContent = "=";
        rows[i].appendChild(nula);
        rows[i].appendChild(equal);
    } else {
        let k = 3 * i
        for (let j = 0; j < 3; j++) {
            const button = document.createElement("button");
            button.textContent = 10-k;
            rows[i].appendChild(button);
            k--;
        }
        
        if (i == 1) {
            const multiplication = document.createElement("button");
            multiplication.textContent = "x";
            rows[i].appendChild(multiplication);
        } else if (i == 2) {
            const subtraction = document.createElement("button");
            subtraction.textContent = "-";
            rows[i].appendChild(subtraction);
        } else if (i == 3) {
            const addition = document.createElement("button");
            addition.textContent = "+";
            rows[i].appendChild(addition);
        }
    }
}