{
    const getCurrencyRate = (currency) => {
        switch (currency) {
            case "EUR":
                return 4.4524;
            case "USD":
                return 3.9667;
            case "GBP":
                return 4.9293;
            case "KRW":
                return 0.003269;
        }
    };

    const calculateResult = (amount, currency) => {
        return amount / getCurrencyRate(currency);
    };

    const getResultText = (amount, result, currency) => {
        return `${amount} PLN = <span class="form__result--value">${result.toFixed(2)} ${currency}</span>`;
    };

    const init = () => {
        let formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amount = +document.querySelector(".js-amount").value;
            const currency = document.querySelector(".js-currency").value;
            const result = calculateResult(amount, currency);

            document.querySelector(".js-result").innerHTML = getResultText(amount, result, currency);
        });
    };

    init();
}