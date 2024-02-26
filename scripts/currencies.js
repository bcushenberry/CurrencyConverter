// Load exchange rates data via AJAX:
$.getJSON(
    // Call API - using Open Exchange Rates for this
    // Separated the API key from the file for privacy reasons
    'https://openexchangerates.org/api/latest.json?app_id=' + config.apiKey,
    function(data) {
        // Check money.js has finished loading:
        if ( typeof fx !== "undefined" && fx.rates ) {
            fx.rates = data.rates;
            fx.base = data.base;
        } 
        else {
            // If not, apply to fxSetup global:
            var fxSetup = {
                rates : data.rates,
                base : data.base
            }
        }
    }
);

const currencies = [
    {value: "USD", text: "USD"},
    {value: "EUR", text: "EUR"},
    {value: "JPY", text: "JPY"},
    {value: "GBP", text: "GBP"},
    {value: "CNY", text: "CNY"},
    {value: "AUD", text: "AUD"},
    {value: "CAD", text: "CAD"},
    {value: "CHF", text: "CHF"},
    {value: "HKD", text: "HKD"},
    {value: "SGD", text: "SGD"},
    {value: "SEK", text: "SEK"},
    {value: "KRW", text: "KRW"},
    {value: "NOK", text: "NOK"},
    {value: "NZD", text: "NZD"},
    {value: "INR", text: "INR"},
    {value: "MXN", text: "MXN"},
    {value: "TWD", text: "TWD"},
    {value: "ZAR", text: "ZAR"},
    {value: "BRL", text: "BRL"},
    {value: "DKK", text: "DKK"},
    {value: "PLN", text: "PLN"},
    {value: "THB", text: "THB"},
    {value: "ILS", text: "ILS"},
    {value: "IDR", text: "IDR"},
    {value: "CZK", text: "CZK"},
    {value: "AED", text: "AED"},
    {value: "TRY", text: "TRY"},
    {value: "HUF", text: "HUF"},
    {value: "CLP", text: "CLP"},
    {value: "SAR", text: "SAR"},
    {value: "PHP", text: "PHP"},
    {value: "MYR", text: "MYR"},
    {value: "COP", text: "COP"},
    {value: "RUB", text: "RUB"},
    {value: "RON", text: "RON"},
    {value: "PEN", text: "PEN"},
    {value: "BHD", text: "BHD"},
    {value: "BGN", text: "BGN"},
    {value: "ARS", text: "ARS"}
];