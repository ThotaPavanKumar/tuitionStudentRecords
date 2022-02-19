const mongoose = require("mongoose");

const teacherSchema =  new mongoose.Schema(
    {
        username : {type: String, required:false},
        email: {type : String,required:true, unique: true},
        password : {type:String, required:true},       
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("teacher",teacherSchema);