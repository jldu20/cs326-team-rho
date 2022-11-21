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