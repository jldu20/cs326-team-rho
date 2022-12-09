
document.getElementById("tutee-submit").addEventListener("click", ()=> {
    const yearSelect = document.getElementById("year");
    const name = document.getElementById("tutee-name");
    const email = document.getElementById("tutee-email");
    const courses = document.getElementById("courses");
    const grade = yearSelect.options[yearSelect.selectedIndex].text;
    const description = document.getElementById("description")
 
    const data = {
        "Name": name.value,
        "Email": email.value,
        "Course": courses.value,
        "Grade": grade,
        "Description" : description.value
    };
    
    console.log(data)
    fetch('/requestTutor', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((response) => console.log(response))
    .then((data) => {
        console.log('Success:', data);
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    alert("Submitted!")
})

