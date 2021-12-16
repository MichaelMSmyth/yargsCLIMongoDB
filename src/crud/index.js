// https://docs.mongodb.com/v5.0/reference/method/js-collection/


exports.createRecord = async (collection, recordObj) => {
    try {
        // Todo - use appropriate method to create a record. This method seems to be fairly simple
        await collection.insertOne(recordObj)
        console.log(`Successfully created a record for ${Object.values(recordObj)}`)
    } catch (error){
        console.log(error);
    }
}

exports.readRecord = async (collection, recordObj) => {
    try {
        // Todo - use appropriate method to find records. I want to find everything matching the search prameters.
        // .find(query, projection) - 
        console.log(await collection.find({}).toArray)        
    } catch (error){
        console.log(error);
    }

}

exports.updateRecord = async (collection, recordObj) => {
    try {
        await collection.updateOne(recordObj)
        console.log(`Successfully updated a record for ${Object.values(recordObj)}`)
    } catch (error){
        console.log(error);
    }
}

exports.deleteRecord = async (collection, recordObj) => {
    try {
        await collection.deleteOne(recordObj)
        console.log(`Successfully deleted a record for ${Object.values(recordObj)}`)
    } catch (error){
        console.log(error);
    }
}