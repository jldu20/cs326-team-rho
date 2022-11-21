// let table = document.getElementById("myTable");
const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://rhoMember:2bSh5JdVsCuW3TSK@rhobase.faewymn.mongodb.net/test";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("open_source_learning");
    const movies = database.collection("tutees");
    await movies.find().forEach(x=> {
        // alert(x.Name);
        console.log(x.Name);
    })
  } finally {
    await client.close();
  }
}
// alert("hello")
run().catch(console.dir);
// let xd = table.insertRow(-1);

// xd.innerHTML = "<td>test</td><td>test</td><td>test</td><td>test</td><td>test</td>";