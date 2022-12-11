// fetch('/isIn', {
//   method: 'GET', // or 'PUT'
//   headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json' 
//   },
// }).then(res=>res == false? location.href = "./login.html": location.href = window.location.href)
let table = document.getElementById("myTable");
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
    newRow.innerHTML = `<td>${person.Name}</td><td>${person.Email}</td><td>${person.Course}</td><td>${person.Grade}</td><td>${person.Description}</td>`;
  }
})
