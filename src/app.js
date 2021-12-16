const yargs = require("yargs")
const connection = require("./db/connection")
const { createRecord, readRecord, updateRecord, deleteRecord } = require("./crud/index")
const 

// I want to take the yargs.argv object and pass the parameters into the movieObj regardless of the key

const app = async (args) => {
    // Declare a movieObj which will be updated with properties in a following iterator
    let recordObj = {}
    // Declare a variable which stores the keys of the args object in an array. First and last keys are removed.
    const queryFields = Object.keys(args).slice(2,-1)
    // Iterate over the keys and add them with their corresponding values to the movieObj object. 
    queryFields.forEach(element => {
        recordObj = Object.assign({ [element]: args[element]}, recordObj)
            })

    try {
        if (args.create) {
            // Call crudFunc and pass add function and recordObj
            connection(createRecord, recordObj)
        } else if (args.read) {
            // Call crudFunc and pass the read function and recordObj
            connection(readRecord, recordObj)
        } else if (args.update) {
            // Call crudFunc and pass the update function and recordObj
            connection(updateRecord, recordObj)
        } else if (args.delete) {
            // Call crudFunc and pass the delete function and recordObj
            connection(deleteRecord, recordObj)
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)

// Yargs syntax = 
// node src/app.js --add title="movie title" --actor="actor name"
// or node src/app.js --command="add"

// Create a CLI that allows users to store movies in a MongoDB database connection
//App must cover all CRUD operations and
//Movie entries should include optional information about
//Strech goals - Allow for filtered search results (name / actor / rating)
