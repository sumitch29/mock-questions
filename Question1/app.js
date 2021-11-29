const btn = document.querySelector('#input');
const outPut = document.querySelector('#output');

btn.addEventListener('click',clickHandler);

const url = 'https://jsonplaceholder.typicode.com/todos'

// function clickHandler(){
//     fetch(url)
//     .then(response => response.json())
//     .then(todo => {
//        let result = "";
//        outPut.innerHTML = todo.map((todo)=>{
//            result += `<p>Title: ${todo.title}</p>`
//             return result
//        }).join("");
//     });
// }

function clickHandler(){
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let result = ""
        outPut.innerHTML = data.map((data) =>{
            result += `<p>Title: ${data.title}</p>`
            return result
        }).join("");
    });
}