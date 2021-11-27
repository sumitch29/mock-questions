const btn = document.querySelector('#input');
const outPut = document.querySelector('#output');

btn.addEventListener('click',clickHandler);

const url = 'https://jsonplaceholder.typicode.com/todos'

function clickHandler(){
    fetch(url)
    .then(response => {return response.json()})
    .then(todo => {
       let result = "";
       outPut.innerHTML = todo.map((todo)=>{
           result += `<p>Title: ${todo.title}</p>`
            return result
       }).join("");
    });
}
