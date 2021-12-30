let currencyRatio = {
    USD: {
        KRW: 1189.15,
        USD: 1,
        VND: 22800.00,
        unit: "달러",
        img: "image/America.png"
    },
    KRW: {
        KRW: 1,
        USD: 0.00084,
        VND: 19.17,
        unit: "원",
        img: "image/Korea.png"
    },
    VND: {
        KRW: 0.052,
        USD: 0.000044,
        VND: 1,
        unit: "동",
        img: "image/Vietnam.png"
    }
};

let fromCurrency = "USD";
let toCurrency = "USD";
let fromButton = document.getElementById("from-button");
let toButton = document.getElementById("to-button");

// 탑 드롭다운 메뉴
document.querySelectorAll("#from-currency-list a").forEach(menu => menu.addEventListener("click", function() {
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
    convert("from");
    currencyUnit();
    })
);

// 바텀 드롭다운 메뉴
document.querySelectorAll("#to-currency-list a").forEach(menu => menu.addEventListener("click", function() {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
    convert("from");
    currencytoUnit();
    })
);

// 입력값 나라변 환율으로 자동 변환
function convert(type) {
    let amount = 0;
    if (type == "from") {
        amount = document.getElementById("from-input").value;
        let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
        document.getElementById("to-input").value = convertedAmount;
    } else {
        amount = document.getElementById("to-input").value;
        let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
        document.getElementById("from-input").value = convertedAmount;
    }
}

// 국가별 돈 단위 변경
function currencyUnit () {
    document.getElementById("from-money-unit").textContent = currencyRatio[fromCurrency].unit;
}

function currencytoUnit () {
    document.getElementById("to-money-unit").textContent = currencyRatio[toCurrency].unit;
}

