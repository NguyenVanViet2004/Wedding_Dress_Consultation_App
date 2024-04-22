const {categoryModel} = require('../module/categoryModel');

exports.getCategoryNameById = async (categoryId) => {
    try {
        const category = await categoryModel.findById(categoryId);
        if (category) {
            return category.name;
        } else {
            return null; 
        }
    } catch (error) {
        console.error("Error fetching category:", error);
        throw new Error("Error fetching category");
    }
};

exports.createCategory = async (req, res, next) => {
    try {
        const newCategory = new categoryModel(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getCategory = async (req, res, next) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

