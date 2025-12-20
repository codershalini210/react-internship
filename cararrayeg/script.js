 const txtcar = document.getElementById("txtcar")
 const txtprice = document.getElementById("txtprice")
 const btnadd = document.getElementById("btnadd")
 const btncancel = document.getElementById("btncancel")
 const tbdy = document.getElementById("tbdy")
 const presult = document.getElementById("presult")
 const txtindex = document.getElementById("txtindex")
const clearAll=()=>
{
    txtcar.value = ""
    txtprice.value=""
    presult.innerHTML = ""
    btnadd.value="Save"
}
let carsary = []
btncancel.addEventListener("click",()=>clearAll())
btnadd.addEventListener("click",()=>
{
    if(txtcar.value =="" || txtprice.value=="")
    {
        presult.innerHTML = "Please fill all the details"
        return
    }
    if(carsary.findIndex((c)=>c.name == txtcar.value )!=-1)
    {
        presult.innerHTML = "Car already added"
        return
    }
    const car = {name:txtcar.value,price:txtprice.value}
    if(btnadd.value =="Save")
    {
    carsary.push(car)
    }
    else
    {
        let index =txtindex.value
        carsary[index].name = car.name
        carsary[index].price = car.price
        btnadd.value = "Save"
    }
   showCars()
    txtcar.focus()
})
function deleteCar(index)
{
    carsary.splice(index,1)
    showCars()
}
function showCars()
{
     tbdy.innerHTML = ""
    let ui = carsary.map((c,i)=>{
        return `<tr><td>${c.name}</td><td>${c.price}</td>
        <td><input type="button" value="Edit" onclick="editCar(${i})"/> </td>
        <td><input type="button" value="Delete" onclick="deleteCar(${i})"/></td></tr>`
    }).join('')
    
    tbdy.innerHTML = ui;
    console.log(ui)
    clearAll();
}

function editCar(index)
{
    txtcar.value = carsary[index].name
    txtprice.value = carsary[index].price
    btnadd.value = "update"
    txtindex.value = index
}