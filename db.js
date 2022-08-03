const MongoClient=require("mongodb").MongoClient
const employeedata=require("./employee.json")
const connectionString="mongodb://localhost:27017"
MongoClient.connect(connectionString, async (err, db) => {
    if (err) {
      console.error("Error while connecting", err)
      return
    }
    const database = db.db("Human_Resoure")
    const dbCollection = database.collection("employee")
  
    console.log("Connected to Mongo Database")
  
    const inserting = await database
      .collection("employee")
      .insertMany(employeedata)
  
    console.log(inserting)
})
  