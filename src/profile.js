let table = document.getElementById("profileTable");
console.log(table)
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
      if (arr[i].Name != "Jerry Du"){
        continue
      }
      console.log(arr[i])
      let newRow = table.insertRow(-1)
      newRow.innerHTML = `<td>${id}</td><td>${person.Name}</td><td>${person.Email}</td><td>${person.Course}</td><td>${person.Grade}</td><td>${person.Description}</td>`;
      id+=1
    }
  })




  
document.getElementById("updateProfileBTN").addEventListener("click", ()=> {
    const yearSelect = document.getElementById("year");
    const data = {
        "Name": document.getElementById("card-name").innerHTML,
        "Email": document.getElementById("email").value,
        "Course": document.getElementById("course_title").value,
        "Grade": yearSelect.options[yearSelect.selectedIndex].text,
        "Description" : document.getElementById("description_box").value,
    };
    console.log(data)
    fetch('/updateTutee', {
        method: 'POST', // or 'PUT'
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

document.getElementById("deleteProfileBtn").addEventListener("click", ()=> {
    const data = {
        "Name": document.getElementById("card-name").innerHTML,
    };
    
    console.log(data)
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