const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        name: {type : String,required:true},
        subject : {type:String, required:true},
        marks: {type: Number, required:true},
        date : {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("test",testSchema);