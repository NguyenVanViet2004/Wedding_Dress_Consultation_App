const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/webding', {
    useNewUrlParser: true,

}).then(console.log("ket noi thang cong")).catch("kn that bai")


module.exports = mongoose
