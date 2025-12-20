
const txtsource = document.getElementById("txtsource")
const txtdesti = document.getElementById("txtdesti")
const btnadd  = document.getElementById("btnadd")
const listtrains = document.getElementById("listtrains")
const txtsearch = document.getElementById("txtsearch")
let listitems 
btnadd.addEventListener("click",()=>
{
    let li = document.createElement("li")
    li.innerHTML = ` source : ${txtsource.value} - Destination : ${txtdesti.value}`
    li.classList.add("listitem")
    listtrains.appendChild(li)
    listitems = document.querySelectorAll(".listitem")
    console.log(listitems)
})
txtsearch.addEventListener("keyup",()=>
{   
    listitems.forEach(element => {
        if(!(element.innerHTML).includes(txtsearch.value))
        {
           element.classList.add("displaynone") 
           element.classList.remove("displayblock")
        }
        else
        {
            element.classList.add("displayblock") 
            element.classList.remove("displaynone")
        }
        console.log(element.innerHTML)
    });
})