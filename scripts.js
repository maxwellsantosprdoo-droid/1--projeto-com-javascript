const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.2;
    const bitcoinToday = 326497.08;



    if (currencySelect.value == "dolar") {
        //se o valor estiver selecionado o valotr de dolar,entra nesse if e converte o valor para dolar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    }
    if (currencySelect.value == "euro") {
        //se o valor estiver selecionado o valotr de euro,entra nesse if e converte o valor para euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
if (currencySelect.value == "libra") {
        //se o valor estiver selecionado o valotr de libra,entra nesse if e converte o valor para libra
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }
    if (currencySelect.value == "bitcoin") {
        //se o valor estiver selecionado o valotr de bitcoin,entra nesse if e converte o valor para bitcoin
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name");

    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./img/dola-3.png";
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./img/euro-2.png";


    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "./img/libra-1.png";
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./img/bitcoin-1.png";
    }
    convertValues();
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

