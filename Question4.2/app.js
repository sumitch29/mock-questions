const butTon = document.querySelector("#button");
const butTon2 = document.querySelector("#button2");
const outPut = document.querySelector("#output");

butTon.addEventListener('click',()=>{
    let url = "https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD"
    fetch(url)
    .then(response => response.json())
    .then(data =>{
            outPut.innerText = data.message
    })
})


butTon2.addEventListener('click',()=>{
    let url = "https://mock-practice.prakhar10v.repl.co/bollywood?name=ZNMD"
    fetch(url)
    .then(response => response.json())
    .then(data =>{
            outPut.innerText = data.message
    })
})