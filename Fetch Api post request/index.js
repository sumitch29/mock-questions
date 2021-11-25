const bTn = document.querySelector("#btn");
const outPut = document.querySelector("#output");

bTn.addEventListener('click',clickHandler)

function clickHandler(){
    URL = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"sumit23411","salary":"123","age":"23"}';
    params = {
        method : 'post',
        header : {
                    'Content-Type' : 'application/json'
        },
        body : data
    }
    fetch(URL, params)
    .then(response => response.json())
    .then(data => console.log(data))
}