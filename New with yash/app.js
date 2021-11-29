const inPut = document.querySelector("#input")
const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");


// "https://jsonplaceholder.typicode.com/dummyUsers"

let url =  'https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD'

butTon.addEventListener('click',function (){enableBtn(inPut.value)})

// function enableBtn(){
//     fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         let result = ''
//         outPut.innerHTML = data.map((data) => {
//             result += `<p>Title : ${data.message}</p>`
//             return result
//         }).join('')

//     })}

function enableBtn(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        outPut.innerText = data.message
    })
}