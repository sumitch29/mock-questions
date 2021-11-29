const inPut = document.querySelector("#input");
const passWord = document.querySelector("#password");
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',checkPassword)

function checkPassword(){
    if(inPut.value === passWord.value){
        outPut.innerText = "Password can't have name"
    }
}
