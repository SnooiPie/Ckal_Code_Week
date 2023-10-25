let currentInput = '';
let currentOperation = '';
let calculatedResult = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    currentOperation = '';
    calculatedResult = '';
    document.getElementById('result').value = '';
}

function performOperation(operation) {
    if (currentInput !== '') {
        if (calculatedResult !== '') {
            currentInput = calculatedResult;
            calculatedResult = '';
        }
        currentOperation = operation;
        appendToResult(` ${operation} `);
    }
}

function calculateResult() {
    if (currentInput !== '') {
        let expression = currentInput;
        
        // Handle parentheses
        while (expression.includes('(')) {
            const start = expression.lastIndexOf('(');
            const end = expression.indexOf(')', start);
            if (end === -1) {
                // Unbalanced parentheses
                document.getElementById('result').value = 'Error';
                return;
            }
            const subExpression = expression.substring(start + 1, end);
            const subResult = calculateSubExpression(subExpression);
            expression = expression.replace(`(${subExpression})`, subResult);
        }

        const finalResult = calculateSubExpression(expression);
        document.getElementById('result').value = finalResult;
        currentInput = finalResult;
        currentOperation = '';
    }
}

function calculateSubExpression(expression) {
    const parts = expression.split(' ');
    const numbers = [];
    const operators = [];

    for (const part of parts) {
        if (!isNaN(part)) {
            numbers.push(parseFloat(part));
        } else if (part === '+' || part === '-' || part === '*' || part === '/') {
            while (
                operators.length > 0 &&
                getPrecedence(operators[operators.length - 1]) >= getPrecedence(part)
            ) {
                const num2 = numbers.pop();
                const num1 = numbers.pop();
                const operator = operators.pop();
                numbers.push(applyOperation(num1, num2, operator));
            }
            operators.push(part);
        }
    }

    while (operators.length > 0) {
        const num2 = numbers.pop();
        const num1 = numbers.pop();
        const operator = operators.pop();
        numbers.push(applyOperation(num1, num2, operator));
    }

    return numbers[0];
}

function getPrecedence(operator) {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
}

function applyOperation(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}
