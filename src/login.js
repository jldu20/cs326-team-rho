let user = "";
document.getElementById("log-in-button").addEventListener("click", ()=>{
    const username = document.getElementById("user_username");
    const password = document.getElementById("user_password");

    const user_data = {
        "username" : username.value,
        "password" : password.value
    };
    console.log("this is data: ", user_data);
    let found = false;
    fetch('/accAuth', {
        method: 'GET', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
    }).then(response=>response.json()).then(arr=> {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].username === user_data.username) {
                if(arr[i].password === user_data.password) {
                    found = true;
                    fetch('/currUser', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({username:user_data.username}),
                        })
                     fetch('/cUser', {
                        method: 'POST', // or 'PUT'
                     }).then(res=>res.text()).then(data=>swal("SUCCESS", "Logged in!", "Success"))
                     location.href = "./index.html"
                }
            }
        }
        if(!found) {
            swal("ERROR","Username/password does not exist. Please try a different password or create an account","error")
        }
        else {
            swal("SUCCESS", "Logged in!", "Success")
        }
    }
    )})

document.getElementById("register-button").addEventListener("click", ()=>{
    const username = document.getElementById("user_username");
    const password = document.getElementById("user_password");
    let exists = false;
    const user_data = {
        "username" : username.value,
        "password" : password.value
    };
    let found = false;
    fetch('/accAuth', {
        method: 'GET', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
    }).then(response=>response.json()).then(arr=> {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].username === user_data.username) {
                swal("ERROR:","Username already exists! Please login with that username or create a new one","error")
                exists = true;
            }
        }
        if(!exists) {
            fetch('/addUser', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user_data),
                })
            swal("Success!","account created, please login with it","success").then(value=> location.href = "./login.html")
        }
        
    })})
