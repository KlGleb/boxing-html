
['length', 'width', 'height'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', function(event) {
        validateAndShowErrors(id, event.target.value);
        checkDivValidity();
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
