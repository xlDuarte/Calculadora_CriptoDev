//Funções de botões click

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
        case "C":
        display.innerText = "";
        break;
        case "=":
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Conta Inválida!";
        }
        break;
        case "←":
        if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
        }
        break;
        default:
        display.innerText += e.target.innerText;
    }
    });
});

//Funções de teclado
const numbersEl = document.querySelectorAll(".button");

document.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' ||
        e.key === '*' ||
        e.key === '-' ||
        e.key === '+' ||
        e.key === '(' ||
        e.key === ')' ||
        e.key === '/'
    ){
        clickButtonEl(e.key);
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    } else if (e.key === "←") {
        clickDel();
    }
});

function clickButtonEl(key) {
    numbersEl.forEach((button) => {
    if (button.innerText === key) {
        button.click();
    }
    });
}

function clickEqual() {
    equal.click();
}

function clickDel() {
    del.click();
}
