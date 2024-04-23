const db = require ('./db')
const {Schema, model} = db;

const userSchema = new Schema(
    {
        Username:{type: String, required: true},
        Numberphone:{type: String, required: true},
        Email:{type: String, required: true},
        Password: {type: String, required: true},
        Avatar:{type: String, required: false},
        Role:{type: Number, require: true, default: 0}
    },
    {
        collection: "Users"
    }
)

const userModel = model("userModel", userSchema)
module.exports = {userModel}
