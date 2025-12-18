const txta   = document.getElementById("txta")
const txtb   = document.getElementById("txtb")
const btnadd = document.getElementById("btnadd")
const btnsub = document.getElementById("btnsub")
const btnmulti = document.getElementById("btnmulti")
const btndivide = document.getElementById("btndivide")
const dresult = document.getElementById("dresult")
btnadd.addEventListener("click",()=>calc('+'))
btnsub.addEventListener("click",()=>calc('-'))
btnmulti.addEventListener("click",()=>calc('*'))
btndivide.addEventListener("click",()=>calc('/'))
function calc(op)
{
    a = parseInt(txta.value)
    b = parseInt(txtb.value)
    let c = 0
    let msg = ""
    switch (op) {
        case '+':
            c = a+b
            msg =" sum is "+c 
            break;
        case '-':
            c=a-b
            msg = "difference is "+c
            break;
        case "*":
            c=a*b
            msg = "multiplication is "+c
            break
        case "/":
            c = a/b
            msg = "division is "+c
            break;    
    }
    dresult.innerHTML = msg 
}