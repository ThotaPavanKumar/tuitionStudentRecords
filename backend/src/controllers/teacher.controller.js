const express = require("express");
const router = express.Router();

const Teacher = require("../models/teacher.model");
const Student = require("../models/students.model");

// router.post("/", async (req,res) => {
//     try {

//         const teacher = await Teacher.create(req.body);
//         res.status(201).send({teacher});

//     } catch (e) {
//         res.status(500).json({status : "Failed", message : e.message});
//     }
// })

router.post("/", async (req,res) => {
    try {

        const teacher = await Teacher.findOne({email : req.body.email})        
        .lean().exec();
        console.log("teacher",teacher);
        const student = await Student.find({teacher_id : teacher._id})        
        .lean().exec();
        console.log("student",student);
        res.status(201).send({teacher,student});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})
// grade filtering
router.get("/:grade", async (req,res) => {
    try {

        // const teacher = await Teacher.findOne({email : req.body.email})        
        // .lean().exec();
        // console.log("teacher",teacher);
        const student = await Student.find({grade : req.params.grade})      
        .lean().exec();
        console.log("student",student);
        res.status(201).send({student});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

// gender filtering
router.get("/category/:gender", async (req,res) => {
    try {

        // const teacher = await Teacher.findOne({email : req.body.email})        
        // .lean().exec();
        // console.log("teacher",teacher);
        
        const student = await Student.find({gender : req.params.gender})      
        .lean().exec();
        console.log("student",student);
        res.status(201).send({student});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

// sort  by age
router.get("/sort/age", async (req,res) => {
    try {

        
        const student = await Student.find().lean().exec();
        // .sort((a,b) => b.age - a.age) 
        let stud = student.sort((a,b) => b.age - a.age)      
        
        console.log("student",stud);
        res.status(201).send({student});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})



module.exports = router;