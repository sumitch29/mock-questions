const inPut = document.querySelector("#input");
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',clickHandler)

let url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="

function clickHandler(){
    let userName = inPut.value
    let serverUrl = url + userName
    fetch(serverUrl)
    .then(response => response.json())
    .then(data => {
        outPut.innerText = data.otp
    })
}