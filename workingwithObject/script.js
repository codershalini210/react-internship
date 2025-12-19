{/* <input type="text" id="txtemail">txtcontact formuser */}
const formuser = document.getElementById("formuser")
const txtemail = document.getElementById("txtemail")
const txtname = document.getElementById("txtname")
const txtcontact = document.getElementById("txtcontact")
const presult = document.getElementById("presult")
formuser.addEventListener("submit",(e)=>
{
    e.preventDefault()    
    const user = {
        username:txtname.value,
        contact:txtcontact.value,
        email:txtemail.value
    }
    presult.innerHTML = JSON.stringify(user)
    console.log(user)
})