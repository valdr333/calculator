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
    div.classList.add("buttonsRow" + i);
    div.classList.add("allRows");
    buttons.appendChild(div);
    rows[i-1] = document.querySelector(".buttonsRow"+i)
}

for (let i = 0; i < 5; i++) {
    if (i == 0) {
        const ac = document.createElement("button");
        ac.textContent = "AC";
        const division = document.createElement("button");
        division.textContent = "÷";
        ac.classList.add("buttonsRowButton", "buttonOther");
        division.classList.add("buttonsRowButton", "buttonOperator");
        rows[i].appendChild(ac);
        rows[i].appendChild(division);
    } else if (i == 4) {
        const nula = document.createElement("button");
        nula.textContent = 0;
        const equal = document.createElement("button");
        equal.textContent = "=";
        nula.classList.add("buttonsRowButton", "buttonNumber");
        equal.classList.add("buttonsRowButton", "buttonOperator");
        rows[i].appendChild(nula);
        rows[i].appendChild(equal);
    } else {
        let k = 3 * i
        for (let j = 0; j < 3; j++) {
            const button = document.createElement("button");
            button.textContent = 10-k;
            button.classList.add("buttonsRowButton", "buttonNumber");
            rows[i].appendChild(button);
            k--;
        }
        
        if (i == 1) {
            const multiplication = document.createElement("button");
            multiplication.textContent = "x";
            multiplication.classList.add("buttonsRowButton", "buttonOperator");
            rows[i].appendChild(multiplication);
        } else if (i == 2) {
            const subtraction = document.createElement("button");
            subtraction.textContent = "-";
            subtraction.classList.add("buttonsRowButton", "buttonOperator");
            rows[i].appendChild(subtraction);
        } else if (i == 3) {
            const addition = document.createElement("button");
            addition.textContent = "+";
            addition.classList.add("buttonsRowButton", "buttonOperator");
            rows[i].appendChild(addition);
        }
    }
}

display = document.querySelector(".display");
display.textContent = "0123456789";