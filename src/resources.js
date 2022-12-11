
let vidContainer = document.getElementById("wrapper");

console.log(vidContainer)
document.getElementById("addVid-button").addEventListener("click", ()=> {
    const vidURL = document.getElementById("add_vid_input").value;
    const data = {
        "video":vidURL
    };
    
    console.log(data)
    fetch('/addVideo', {
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





const res = fetch('/getVideo',{
  method:"GET",
  headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
  }
}).then(response => response.json()).then(arr=>{
  console.log(arr)

  console.log(vidContainer)
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].video)
    const ifram = document.createElement("iframe");
    ifram.setAttribute("src",arr[i].video);

    /* Set the iframe height */
    ifram.setAttribute("height", "500");

    /* Set the iframe width */
    ifram.setAttribute("width", "800");
    console.log(ifram)
    vidContainer.appendChild(ifram)
  }
})
