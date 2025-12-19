const txtcity =document.getElementById("txtcity")
const btnadd = document.getElementById("btnadd")
const dcities = document.getElementById("dcities")
let cities = []
btnadd.addEventListener("click",()=>
{
    if(txtcity.value=="")
    {
        alert("please fill city")
        return
    }
    let cityname = txtcity.value
    cities.push(cityname);
    dcities.innerHTML = ""
    for(let i =0; i<cities.length;i++)
    {
        // dcities.innerHTML = dcities.innerHTML +cities[i] +"<br>"       
        dcities.innerHTML += cities[i]+ "<br>"        
    }    
    txtcity.value = ""
    txtcity.focus()
})
// let cars = [
//     { id: 1, carname: "Amaze", company: "Honda", price: "7.5L" },
//     { id: 2, carname: "Swift", company: "Maruti Suzuki", price: "6.2L" },
//     { id: 3, carname: "Creta", company: "Hyundai", price: "11.0L" },
//     { id: 4, carname: "Nexon", company: "Tata", price: "8.3L" },
//     { id: 5, carname: "XUV700", company: "Mahindra" }
// ];
// let newcar = {id:6,carname:"BMW102",company:"BMW",price:"50l"}
// cars.push(newcar)
// cars.forEach((car)=>
// {
//     // console.log(car.carname +", "+ car.company)
//     console.log(car)
// })
// --------------------------------------------------
// let cities = [
//     "Ahmedabad",
//     "Rajkot",
//     "Vapi",
//     "gandhinagar",
//     "Dahod",
//     "Godhra",
// ]
// cities[1]="Indore"
// cities.push("ujjain")
// cities.pop()

// for( let i =0;i<cities.length;i++)
// {
// console.log(cities[i])
// }