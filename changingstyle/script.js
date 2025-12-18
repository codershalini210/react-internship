const btnshow = document.getElementById("btnshow")
const btnhide = document.getElementById("btnhide")
const box = document.getElementById("box")
// btnshow.style.visibility = "hidden"
btnshow.style.display = "none"
btnshow.addEventListener("click",()=>
{
    box.style.display = "block"
    btnshow.style.display = "none"
    btnhide.style.display="block"
    // box.style.backgroundColor = "green"
    // box.style.visibility = "visible"
    // btnshow.style.visibility = "hidden"
    // btnhide.style.visibility = "visible"
})
btnhide.addEventListener("click",()=>
{
    // box.style.visibility = "hidden"
    // btnhide.style.visibility = "hidden"
    // btnshow.style.visibility = "visible"
    box.style.display = "none"
    btnhide.style.display = "none"
    btnshow.style.display = "block"
})