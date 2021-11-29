const butTon = document.querySelector("#button");
const outPut = document.querySelector("#output");

let array =[
    {
        task : "playing cricket",
        completed : true,
    },
    {
        task : "playing cricket",
        completed : false,
    },
    {
        task : "playing cricket",
        completed : true,
    },
    {
        task : "playing cricket",
        completed : true,
    }
]

butTon.addEventListener('click',()=>{
        for(let i=0 ; i<array.length ; i++)
        if(array[i].completed){
            outPut.innerHTML += `<p>${array[i].task}</p>`

}})