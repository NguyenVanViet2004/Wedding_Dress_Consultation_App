const {billModel} = require('../models/Bill_model')


exports.getBill = async (req, res ,next) => {
    try {
        
        const data = await billModel.find({})
        res.json(data)
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.getBillById = async (req, res ,next) => {
    try {
        const id = req.params.id
        const data = await billModel.findById(id)
        res.json(data)
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.putBill = async (req, res ,next) => {
    try {
        const obj = req.body
        const id = req.params.id

        const data = await billModel.findByIdAndUpdate(id, obj, {new : true})
        res.json({status: "update thanh cong", data: data})
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.addBill = async (req, res ,next) => {
    try {
        const obj = req.body
        const data = new billModel(obj)
        

        res.json({status: "add thanh cong", data: await data.save()})

    } catch (error) {
        console.log(error);
        next()
    }
}

exports.deleteBill = async (req, res ,next) => {
    try {

        const id = req.params.id

        const data = await billModel.findByIdAndDelete(id)
    
        res.json({status: "xoa thanh cong", data: data})

    } catch (error) {
        console.log(error);
        next()
    }
}