const inPut = document.querySelector("#input");
const butTon = document.querySelector("#button");
const butTon2 = document.querySelector("#button2");
const butTon3 = document.querySelector("#button3");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',blackColor)
butTon2.addEventListener('click',checkInput)
butTon3.addEventListener('click',checkInput1)

function checkInput(){
    inPut.style.color = "yellow"
}


function checkInput1(){
    inPut.style.color = "red"
}


function blackColor(){
    inPut.style.color = "black"
}
