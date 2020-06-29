let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.4524;
let rateUSD = 3.9667;
let rateGBP = 4.9293;
let rateKRW = 0.003269;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let rate;
    let result = 0;

    switch (currencyElement.value) {
        case "EUR":
            rate = rateEUR;
            break;
        case "USD":
            rate = rateUSD;
            break;
        case "GBP":
            rate = rateGBP;
            break;
        case "KRW":
            rate = rateKRW;
            break;
    }
    result = amount / rate;

    resultElement.innerHTML = `${amount} PLN = <span class="form__result--value">${result.toFixed(2)} ${currencyElement.value}</span>`;
})