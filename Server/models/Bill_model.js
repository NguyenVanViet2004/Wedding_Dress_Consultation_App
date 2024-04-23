const db = require ('./db')
const {Schema, model} = db;

const billSchema = new Schema(
    {
        IdUser:{type: String, required: true},
        Numberphone:{type: String, required: true},
        Email:{type: String, required: true},
        Name: {type: String, required: true},
        Message:{type: String, required: true},
        IdWeddingDress:{type: String, require: true}
    },
    {
        collection: "Bills"
    }
)

const billModel = model("billModel", billSchema)
module.exports = {billModel}
