fetch('/isIn', {
    method: 'POST', // or 'PUT'
  }).then(res=>res.text()).then(data => {
    console.log(data)
    if(data == "false") {
      location.href = "./login.html"
    }
  })

let table = document.getElementById("profileTable");
let acc_name = ""
let displayTableArr = []
fetch('/cUser', {
    method: 'POST', // or 'PUT'
 }).then(res=>res.text()).then(data=>acc_name = data)


const res = fetch('/getTutee',{
    method:"GET",
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    }
  }).then(response => response.json()).then(arr=>{
    let id = 0
    for(let i = 0; i < arr.length; i++) {
      let person = arr[i]
      if (arr[i].Name != acc_name){
        continue
      }
      delete person._id
      displayTableArr.push(person)
      let newRow = table.insertRow(-1)
      newRow.innerHTML = `<td>${id}</td><td>${person.Name}</td><td>${person.Email}</td><td>${person.Course}</td><td>${person.Grade}</td><td>${person.Description}</td>`;
      id+=1
    }
  })



document.getElementById("updateProfileBTN").addEventListener("click", ()=> {

    const idVal = document.getElementById("idfromTable").value

  
    const data = {
        "queryObj" : displayTableArr[idVal],
        "Name": acc_name,
        "Email": document.getElementById("nEmail").value,
        "Course": document.getElementById("nCourse").value,
        "Grade": document.getElementById("nGrade").value,
        "Description" : document.getElementById("nDesc").value,
    };
    console.log(data,"DTA")
    fetch('/updateTutee', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // body: data
    })
        .then((response) => response)
        .then((mydata) => {
            console.log('Success:', mydata);
            console.log(mydata)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

});

document.getElementById("deleteIDButton").addEventListener("click", ()=> {

    const idVal = document.getElementById("idForDel").value
    console.log(idVal,"idval")

    
    console.log(displayTableArr[idVal],"DisplayTable",idVal)
    
    const data = displayTableArr[idVal]
    
    console.log(data,"this is data for delete")
    fetch('/deleteTutee', {
        method: 'DELETE', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response)
        .then((data) => {
            console.log('Success:', data);
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

});
document.getElementById("logoutButton").addEventListener("click", ()=> {
  console.log("btnClick")
  fetch('/accLogout', {
    method: 'POST', // or 'PUT'
 }).then(res=>res.text()).then(data=>console.log("logoutt"))
 location.href = "./login.html"
});