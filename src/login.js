document.getElementById("log-in-button").addEventListener("click", ()=>{
    const username = document.getElementById("user_username");
    const password = document.getElementById("user_password");

    const user_data = {
        "username" : username.value,
        "password" : password.value
    };

    console.log("this is data: ", user_data);

    const response = fetch('/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_data),
    });
});