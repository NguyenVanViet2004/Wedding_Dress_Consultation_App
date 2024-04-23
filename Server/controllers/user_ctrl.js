const {userModel} = require('../models/user_model')

exports.getUserById = async (req, res ,next) => {
    try {
        const id = req.params.id
        const data = await userModel.findById(id)
        res.json(data)
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.putUser = async (req, res ,next) => {
    try {
        const obj = req.body
        const id = req.params.id
        const data = await userModel.findByIdAndUpdate(id, obj, {new : true})
        res.json({status: "update thanh cong", data: data})
    } catch (error) {
        console.log(error);
        next()
    }
}

exports.addUser = async (req, res ,next) => {
    try {
        const obj = req.body
        const data = new userModel(obj)
        res.json({status: "add thanh cong", data: await data.save()})

    } catch (error) {
        console.log(error);
        next()
    }
}