
// Common Shared Function Here

document.getElementById('cashout-section').style.display = 'none';
document.getElementById('add-money-btn').addEventListener('click', function () {
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('add-money-secton').style.display = 'block';
});
document.getElementById('cashout-btn').addEventListener('click', function () {
    document.getElementById('cashout-section').style.display = 'block';
    document.getElementById('add-money-secton').style.display = 'none';
});

// function for getting all input value
function getInputFiledValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return (inputNumber);
}
// function for innerText
function getInnerTextValue(id) {
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextValueNum = parseFloat(innerTextValue);
    return (innerTextValueNum);
}