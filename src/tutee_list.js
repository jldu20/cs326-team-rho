
let table = document.getElementById("myTable");
console.log(table)
const res = fetch('/getTutee',{
  method:"GET",
  headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
  }
}).then(response => response.json()).then(arr=>{
  for(let i = 0; i < arr.length; i++) {
    let person = arr[i]
    let newRow = table.insertRow(-1)
    newRow.innerHTML = `<td>${person.Name}</td><td>${person.Email}</td><td>${person.Grade}</td><td>${person.Description}</td>`;
  }
})
