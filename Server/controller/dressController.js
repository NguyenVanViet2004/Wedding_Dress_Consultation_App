const {dressModel} = require('../module/dressModel');
const categoryController = require('../controller/categoryController');
const bcrypt = require('bcrypt');

exports.listDress = async (req, res, next) => {
    try {
        const dresses = await dressModel.find();
        for (const dress of dresses) {
            dress.categoryName = await categoryController.getCategoryNameById(dress.categoryId);
        }
        res.status(200).json(dresses);
    } catch (error) {
        console.error("Error fetching dresses:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getDressById = async (req, res, next) => {
    const dressId = req.params.id;
    try {
        const dress = await dressModel.findById(dressId);
        if (!dress) {
            return res.status(404).json({ error: "Dress not found" });
        }
        dress.categoryName = await categoryController.getCategoryNameById(dress.categoryId);
        res.status(200).json(dress);
    } catch (error) {
        console.error("Error fetching dress:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createDress = async (req, res, next) => {
    try {
        const newDress = new dressModel(req.body);
        await newDress.save();
        res.status(201).json(newDress);
    } catch (error) {
        console.error("Error creating dress:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateDress = async (req, res, next) => {
    const dressId = req.params.id;
    try {
        // Code để cập nhật một dress
    } catch (error) {
        console.error("Error updating dress:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteDress = async (req, res, next) => {
    const dressId = req.params.id;
    try {
        // Code để xoá một dress
    } catch (error) {
        console.error("Error deleting dress:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
