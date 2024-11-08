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
    if (o == "+") return add(a, b);
    else if (o == "-") return subtract(a, b);
    else if (o == "x") return multiply(a, b);
    else if (o == "÷") return divide(a, b);
}

/* DOM tree manipulation and creation */
const  buttons = document.querySelector(".buttons");
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
        ac.classList.add("buttonsRowButton", "buttonOther", "buttonAC");
        division.classList.add("buttonsRowButton", "buttonOperator");
        rows[i].appendChild(ac);
        rows[i].appendChild(division);
    } else if (i == 4) {
        const nula = document.createElement("button");
        nula.textContent = 0;
        const dot = document.createElement("button");
        dot.textContent = ".";
        const equal = document.createElement("button");
        equal.textContent = "=";
        nula.classList.add("buttonsRowButton", "buttonNumber");
        dot.classList.add("buttonsRowButton", "buttonDot");
        equal.classList.add("buttonsRowButton", "buttonOperator", "buttonEqual");
        rows[i].appendChild(nula);
        rows[i].appendChild(dot);
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
/* DOM tree manipulation and creation */

const displayNumber = function(btn) {
    if(display.textContent != "Infinity" && display.textContent != "NaN"){
        if(operNum == 0) {
            if(display.textContent == "0" && btn.textContent != 0) display.textContent = btn.textContent;
            else if(display.textContent != "0") display.textContent += btn.textContent;
        } else {
            display.textContent += btn.textContent;
            num2 += btn.textContent;
        }
    }
    display.scrollLeft = display.scrollWidth;
}

const displayOperator = function(btn) {
    if(operNum == 0 && btn.textContent != "=") {
        num1 = display.textContent;
        oper = btn.textContent;
        display.textContent += btn.textContent;
        operNum = 1;
        dotNum = 0;
    } else if(operNum == 1 && btn.textContent != "=") {
        if((oper == "x" || oper == "÷") && num2 == "") num2 = "1";
        pressEqual();
        num1 = display.textContent;
        display.textContent += btn.textContent;
        oper = btn.textContent;
        operNum = 1;
        dotNum = 0;
    }
    display.scrollLeft = display.scrollWidth;
}

const pressEqual = function() {
    if (num1 != "" && oper != "") {
        display.textContent = operate(+num1, oper, +num2);
        num1 = "";
        num2 = "";
        oper = "";
        operNum = 0;
        dotNum = 0;
    }
}

const pressDot = function(btn) {
    if (dotNum == 0) {
        display.textContent += btn.textContent;
        dotNum = 1;
        if(operNum == 1) {
            num2 += btn.textContent;
        }
    }
}

let num1 = "";
let num2 = "";
let oper = "";
let operNum = 0;
let dotNum = 0;

const display = document.querySelector(".displayText");
display.textContent = "0";

const buttonNumber = document.querySelectorAll(".buttonNumber");
buttonNumber.forEach((btn) => btn.addEventListener("click", () => displayNumber(btn)));

const buttonAC = document.querySelector(".buttonAC");
buttonAC.addEventListener("click", () => {display.textContent = "0";
    operNum = 0;
    dotNum = 0;
    num1 = "";
    num2 = "";
    oper = "";
});

const  buttonOperator = document.querySelectorAll(".buttonOperator");
buttonOperator.forEach((btn) => btn.addEventListener("click", () => displayOperator(btn)));

const buttonEqual = document.querySelector(".buttonEqual");
buttonEqual.addEventListener("click", () => pressEqual());

const buttonDot = document.querySelector(".buttonDot");
buttonDot.addEventListener("click", () => pressDot(buttonDot));