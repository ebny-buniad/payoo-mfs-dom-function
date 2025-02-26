document.getElementById('cashout').addEventListener('click', function (event) {
    event.preventDefault();

    const cashoutAmount = getInputFiledValueById('cashout-amount-input');
    const cashoutPIN = getInputFiledValueById('cashout-pin-input');

    if (cashoutPIN === 1111) {
        const mainBalanceValue = getInnerTextValue('main-balance');
        const newBalance = mainBalanceValue - cashoutAmount;
        document.getElementById('main-balance').innerText = newBalance;
    } else {
        alert('PIN is not correct');
    }
})