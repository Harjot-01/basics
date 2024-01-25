// Calculator functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// another function
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}