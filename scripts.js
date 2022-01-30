function setScreen(content) {
    numScreen = document.querySelector('#numScreen');
    numScreen.innerHTML = content;
}

function operate(num1, num2, op) {
    switch (op) {
        case '+': {
            return add(num1, num2);
        }
        case '-': {
            return sub(num1, num2);
        }
        case '*': {
            return mult(num1, num2);
        }
        case '/': {
            if (!(num2 == 0)) {
                return div(num1, num2);
            }
        }
    }
}

function add(num1, num2) {
    return ((parseFloat(num1)) + (parseFloat(num2)));
}

function sub(num1, num2) {
    return ((parseFloat(num1)) - (parseFloat(num2)));
}

function mult(num1, num2) {
    return ((parseFloat(num1)) * (parseFloat(num2)));
}

function div(num1, num2) {
    return ((parseFloat(num1)) / (parseFloat(num2)));
}