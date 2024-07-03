// Selecciona el elemento de la pantalla
const display = document.getElementById('display');

// Función para limpiar la pantalla
function clearDisplay() {
    display.textContent = '0';
}

// Función para eliminar el último carácter de la pantalla
function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

// Función para añadir un número a la pantalla
function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

// Función para añadir un operador a la pantalla
function appendOperator(operator) {
    display.textContent += ` ${operator} `;
}

// Función para calcular el resultado
function calculateResult() {
    try {
        // Evalúa la expresión y muestra el resultado
        display.textContent = eval(display.textContent);
    } catch (error) {
        // Muestra un mensaje de error si la expresión no es válida
        display.textContent = 'Error';
    }
}
