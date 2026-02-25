const mongoose = require('mongoose')

module.exports = async (req, res)=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")
}
