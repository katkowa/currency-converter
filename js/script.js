{
    let formElement = document.querySelector(".js-form");
    let amountElement = document.querySelector(".js-amount");
    let currencyElement = document.querySelector(".js-currency");
    let resultElement = document.querySelector(".js-result");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = +amountElement.value;
        let currency = currencyElement.value;
        let result = calculateResult(amount, currency);

        resultElement.innerHTML = showResult(amount, result, currency);
    });

    function showResult(amount, result, currency) {
        return `${amount} PLN = <span class="form__result--value">${result.toFixed(2)} ${currency}</span>`;
    }


    function calculateResult(amount, currency) {
        return amount / getCurrencyRate(currency);
    }

    function getCurrencyRate(rate) {
        switch (rate) {
            case "EUR":
                return 4.4524;
            case "USD":
                return 3.9667;
            case "GBP":
                return 4.9293;
            case "KRW":
                return 0.003269;
        }
    }

}