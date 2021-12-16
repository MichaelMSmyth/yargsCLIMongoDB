// When working with databases, the connection.js is the first to edit as it's first to test

// Require and run the .config method once without assigning to a variable
require("dotenv").config();

// Require the MongoClient method and assigning it to a variable
const { MongoClient } = require("mongodb");

// Select connect your application from the mongodb website to get the connection URI

// Create a new MongoClient connection.
// Pass in a function to perform crud and and 


const connection = async (recordObj, crudFunc) => {
    try {
        const client = new MongoClient(process.env.MONGO_URI)
        //Open the connection
        await client.connect()
        // .db is a method of the client object
        const db = client.db("FavMovies")
        // Collections are the equivalent of SQL tables
        const collection = db.collection("Movies")
        //Here is where we CRUD on the database
        //Await crudFunc() == await addMovie({title: "Spiderman", actor: "Andrew Garfield"}, collection)
        // collection == MongoClient.db.collection("Selected collection")
        await crudFunc(collection, recordObj)     
        // Close the connection to the client
        client.close()
    } catch (error) {
        //
        console.log(error)
    }
}

// Export the connection function
module.exports = connection;