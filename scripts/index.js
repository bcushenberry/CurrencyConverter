// Declare variables to add the input fields and drop-down menus
const baseConversionInput = document.querySelector('.convert-from');
const targetConversionInput = document.querySelector('.convert-to');

// Function to create the input fields for the amount of currency to convert
function createInputElement(className, type) {
    const input = document.createElement('input');
    input.setAttribute("class", className)
    input.setAttribute("type", type);
    return input;
}

// Call the above function for both the base and target inputs
// Currently, there is no reason to have the target input field,
// but in the future, it would be good to use the target input field
// as an additional way to convert (i.e. have the target and the base
// both function as "base" input fields that convert the other.) 
const baseInput = createInputElement("base-input","text");
const targetInput = createInputElement("target-input","text");

// Function to create the drop-dopwn menus for the currency
// "Currencies" pulls from currencies.js, which lists the 38 most-traded currencies
function createSelectElement(className, currencies) {
    const select = document.createElement('select');
    select.setAttribute("class", className);

    // Loop through each currency and add it to the drop-down list
    currencies.forEach(function(data) {
        const currency = document.createElement("option");
        currency.setAttribute("value", data.value);
        currency.textContent = data.text;
        select.appendChild(currency);
    });

    return select;
}

// Call the above function for the base/target currencies
const baseCurrencySelect = createSelectElement("base-currency-select", currencies);
const targetCurrencySelect = createSelectElement("target-currency-select", currencies);

// Append the input and drop-down menus to the appropriate HTML elements
baseConversionInput.append(baseInput, baseCurrencySelect);
targetConversionInput.append(targetInput, targetCurrencySelect);

// Function for the actual currencyconversion
function convert() {
    // Declaring variables to make things easier.
    let baseValue = parseFloat(baseInput.value);
    let fromCurrency = baseCurrencySelect.value;
    let toCurrency = targetCurrencySelect.value;
    let roundedValue; // This will be used a few lines down

    // Use the fx.convert function from money.js
    let convertedValue = fx.convert(baseValue, {from: fromCurrency, to: toCurrency})

    // Round decimals to 0 if the currency is Japanese yen or Korean won
    // They don't use decimals in their currency.
    // (There may be other currencies like this as well, but I only know of those two)
    if (toCurrency === "JPY" || toCurrency === "KRW") {
        roundedValue = convertedValue.toFixed(0);
    }
    // Everything else rounds to 2 decimals
    else {
        roundedValue = convertedValue.toFixed(2);        
    }

    targetInput.value = roundedValue;
}

// Event listeners for updating the target currency conversion
// There are three main scenarios where we update
// 1. The amount of "base currency" changes/is input
// 2. The base currency is changed from the drop-down
// 3. The target currency is changed from the drop-down
baseInput.addEventListener('input', convert);
baseCurrencySelect.addEventListener('change', convert);
targetCurrencySelect.addEventListener('change', convert);

/* This may not be the ideal way to do it, especially because the free version of the API only allows for 1000 calls per month, but for the purposes of this project, it works just fine. */