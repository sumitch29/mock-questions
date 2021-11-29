const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

let url="https://stock-api.desaihetav.repl.co/list"

butTon.addEventListener('click',clickHandler)

function clickHandler(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let result = ""
        outPut.innerHTML = data.data.map((data) =>{
            result += `<p>Title: ${data.name} id: ${data.id}</p>`
            return result
        }).join("");
    });
}