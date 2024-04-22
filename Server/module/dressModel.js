const Database = require('./db');
const mongoose = require('mongoose');

const uri = "mongodb+srv://nviet7532:QMavC7zCVPgLt6se@cluster0.hik1htn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dressSchema = new Database.mongoose.Schema(
    {
        style: {type: String, require: true},
        color: {type: String, require: true},
        image: {type: [String], require: true},
        material: {type: String, require: true},
        name: {type: String, require: true},
        price: {type: Number, require: true},
        rentalPrice: {type: Number, require: true},
        size: {type: [String], require: true},
        quantity: {type: Number, require: true},
        evaluate: {type: String, require: true},
        description: {type: String, require: true},
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
    },
    {
        collection: "dress"
    }
)

const dressModel = Database.mongoose.model("dress", dressSchema);

module.exports = {dressModel};
