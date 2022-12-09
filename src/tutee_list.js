
document.getElementById("dbSearch").addEventListener("click", ()=> {

  fetch('/getTutee')
  .then(function(response) {
    console.log(response)
  })


})


// const {MongoClient} = require('mongodb')
// const uri = "mongodb+srv://rhoMember:2bSh5JdVsCuW3TSK@rhobase.faewymn.mongodb.net/test";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db("open_source_learning");
//     const tutees = database.collection("tutees");
//     await tutees.find().forEach(x=> {
//         arr.push(x);
//         let xd = table.insertRow(-1);
//         xd.innerHTML = `<td>${x.Name}</td><td>${x.Email}</td><td>${x.Grade}</td><td>${x.Description}</td>`;
//     })
//     console.log(arr);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);
// let xd = table.insertRow(-1);

// xd.innerHTML = "<td>test</td><td>test</td><td>test</td><td>test</td><td>test</td>";