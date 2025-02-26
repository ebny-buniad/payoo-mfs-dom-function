document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();

    const addAmountInputValue = getInputFiledValueById('add-amount-input');
    const pinValue = getInputFiledValueById('pin-input');

    // Wrong way to verify PIN (Don't try serious project)

    if (pinValue === 1111) {
        const mainBalanceValue = getInnerTextValue('main-balance');
        const newBalance = addAmountInputValue + mainBalanceValue;
        document.getElementById('main-balance').innerText = newBalance;
    } else {
        alert('PIN is not correct');
    }
})