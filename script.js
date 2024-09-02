

function appendNumber(num) {
    if (document.getElementById('toyota').innerText == 0) {
        document.getElementById('toyota').innerText = num;
    } else{
        document.getElementById('toyota').innerText += num
    }
}

function calculate () {
    let userCalculation = document.getElementById('toyota').
    innerText;

    let calculation = eval(userCalculation)
    document.getElementById('toyota').innerText = calculation
}

function clearDisplay () {
    let userCalculation = document.getElementById('btn-clear').
    innerText;


    document.getElementById('toyota').innerText = 0

}