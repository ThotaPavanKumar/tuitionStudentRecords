const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name : {type:"String",required : true},
        grade : {type:"String",required : true},
        gender : {type:"String",required : true},
        age : {type:"Number",required : true},
        teacher_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "teacher",
            required: true
        },
        test_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "test",
            required: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("student",studentSchema);