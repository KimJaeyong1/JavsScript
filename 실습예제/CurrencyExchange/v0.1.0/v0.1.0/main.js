let currencyRatio = {
    USD: {
        KRW: 1189.15,
        USD: 1,
        VND: 22800.00,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00084,
        VND: 19.17,
        unit: "원"
    },
    VND: {
        KRW: 0.052,
        USD: 0.000044,
        VND: 1,
        unit: "동"
    }
};

// console.log(currencyRatio.USD.unit);
// console.log(currencyRatio["USD"]["unit"]);


// console.log(document.querySelectorAll("#from-currency-list a"));

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach(menu => menu.addEventListener("click", function() {
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    convert();
    })
);

document.querySelectorAll("#to-currency-list a").forEach(menu => menu.addEventListener("click", function() {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert();
    })
);


function convert() {
    // console.log("key up event issue");
    let amount = document.getElementById("from-input").value;
    // console.log("key up event issue");
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    console.log("환전결과!", convertedAmount);
    
    document.getElementById("to-input").value = convertedAmount;
}