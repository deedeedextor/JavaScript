function solve() {
    let keys = Array
    .from(document.getElementsByClassName('keys'));
    let expressionOutput = document
    .getElementById('expressionOutput');
    let result = document
    .getElementById('result');
    let clearButton = document
    .querySelector('.clear');

    let operand, firstNumber = '', secondNumber = '';

    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    keys.map(key => key.addEventListener('click', function(e){
        let currentSelection = e.target.value;

        clearButton.addEventListener('click', function(){
            expressionOutput.innerHTML = '';
            result.innerHTML = '';
            firstNumber = '';
            secondNumber = '';
            operand = '';
        })

        if (+currentSelection || currentSelection == '.' || currentSelection == '0') {
            if (!operand) {
                firstNumber += currentSelection;
                expressionOutput.innerHTML += currentSelection;
            } else {
                secondNumber += currentSelection;
                expressionOutput.innerHTML += currentSelection
            }
        } else if (calculator.hasOwnProperty(currentSelection)) {
            operand = currentSelection;
            expressionOutput.innerHTML += ` ${operand} `;
        } else if (currentSelection == '=') {
            if (+firstNumber && +secondNumber) {
                result.innerHTML = calculator[operand](+firstNumber, +secondNumber);
            } else {
                result.innerHTML = 'NaN';
            }
        }
    }))
}