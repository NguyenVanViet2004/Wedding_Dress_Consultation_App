const db = require('./db')

const categorySchema = new db.mongoose.Schema(
    {
        name: {type: String, require: true},
    },
    {
        collection: "category"
    }
);

const categoryModel = db.mongoose.model("category", categorySchema);

module.exports = {categoryModel};