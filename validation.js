['length', 'width', 'height'].forEach(function(id, idx, array) {
    var inputField = document.getElementById(id);
    inputField.addEventListener('input', function(event) {
        validateAndShowErrors(id, event.target.value);
        checkDivValidity();
    });
    inputField.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (idx + 1 < array.length) {  // Check if there's another input field
                document.getElementById(array[idx + 1]).focus();
            }
        }
    });
});

function validateAndShowErrors(id, value) {
    document.getElementById(id + 'Error').innerHTML = validatePositiveNumber(value) ? '' : 'The value must be a positive number. The decimal part should be separated by a dot.';
}

function checkDivValidity() {
    var isValid = ['length', 'width', 'height'].every(function(id) {
        return document.getElementById(id + 'Error').innerHTML === '' && document.getElementById(id).value !== '';
    });
    document.getElementById('submitButton').disabled = !isValid;
}

function validatePositiveNumber(num) {
    var regex = /^[0-9]*\.?[0-9]+$/;
    return regex.test(num) && parseFloat(num) > 0;
}
