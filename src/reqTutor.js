
// import request from 'request';
function updateClient(postData){
    var clientServerOptions = {
        uri: '/reqTutor-form',
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        console.log(error,response.body);
        return;
    });
}

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
    // console.log(data)
    // updateClient(data)
    fetch('/src/reqTutor.html/requestTutor', {
        method: 'POST',
        body: JSON.stringify({ "id": 78912 })
    })
    .then(response => response)
    .then(response => console.log(response))

    // fetch('./src/reqTutor.html/requestTutor', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     })  

    //     .then((data) => {
    //         console.log('Success:????????', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/requestTutor", true);
    // xhr.send(data);
    // xhr.onload = function() {
    //     console.log(data);
    // };
    // // fetch("/requestTutor", {
    // //     method:"POST",
    // //     body: JSON.stringify(data)
    // //     }).then(result => {
    // //         // do something with the result
    // //         console.log("Completed with result:", result);
    // //     }).catch(err => {
    // //         // if any error occured, then catch it here
    // //         console.error(err);
    // //     });

})




