const inPut = document.querySelector("#input");
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

let url = "https://stock-api.desaihetav.repl.co/current-price/"

function fetchUrl(input){
    return url+input
}

function fetchApi(){
    let stockName = inPut.value;
    stockName = stockName.toUpperCase();

    fetch (url+inPut)
    .then(response => response.json())
    .then(data => {
        let currentPrice = data.current_price;
        outPut.innerText =  currentPrice
    })
}

butTon.addEventListener('click',fetchApi)