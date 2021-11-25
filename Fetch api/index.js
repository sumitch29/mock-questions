const bTn = document.querySelector("#btn");
const outPut = document.querySelector("#output");

const URL = "https://quick-access-api.desaihetav.repl.co/"

bTn.addEventListener('click',clickHandler)

function clickHandler(){
    fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
}