const inPut = document.querySelector("#input");
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',clickHandler)

function clickHandler(){
    let inputValue = Number(inPut.value)
    let squareValue = (inputValue)**2
    let autoMorphic = squareValue % 10
    
    if(inputValue === autoMorphic){
            outPut.innerText = "number is automorphic"
    }else{
        outPut.innerText = "number is not automorphic"
    }
}