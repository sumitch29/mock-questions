const inPut = document.querySelector("#input");
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',clickHandler)

function clickHandler(){
    if(inPut.value === 'tanvi'){
        outPut.innerText = "She is the best CEO ever!"
    }
}