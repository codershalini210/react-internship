const btn1 = document.getElementById("btn1")
const btngm = document.getElementById("btngm")
const pmsg = document.getElementById("pmsg")
function hi1()
 {
       alert("hello world how are you today");
}       

btn1.addEventListener("click",hi1)
btngm.addEventListener("dblclick",()=>
{
 pmsg.innerText="Good Morning "   
})
