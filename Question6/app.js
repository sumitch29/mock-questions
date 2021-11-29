const inPut = document.querySelector("#input");
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',clickHandler)

function clickHandler(){
    let inputValue = inPut.value
    let squareValue = (inPut.value)**2
    console.log(squareValue)
    let autoMorphic = squareValue % 10
    let checkNumber = autoMorphic

    console.log(autoMorphic)
    console.log(checkNumber)
    console.log(inputValue)
    
    if(inPut == checkNumber){
            outPut.innerText = "number is automorphic"
    }else{
        outPut.innerText = "number is not automorphic"
    }
}