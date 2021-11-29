const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

let url = "https://quick-access-api.desaihetav.repl.co/"

butTon.addEventListener('click',clickHandler)

function clickHandler(){
    fetch (url)
    .then(response => response.json())
    .then(data => {
        outPut.innerText = data.message
    })
}