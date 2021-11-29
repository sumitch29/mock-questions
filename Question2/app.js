const headingOne = document.querySelector("#input");
const btnOne =document.querySelector("#button1");
const btnTwo = document.querySelector("#button2");

btnOne.addEventListener('click',handlerOne)
btnTwo.addEventListener('click',handlerTwo)

function handlerOne(){
    headingOne.style.border = " solid 5px"
}

function handlerTwo(){
    headingOne.style.border = " solid 10px"
}