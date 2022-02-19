const express = require("express");
const router = express.Router();

const Student = require("../models/students.model");


router.post("/", async (req,res) => {
    try {

        const student = await Student.create(req.body);
        res.status(201).send({student});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {

        const student = await Student.find()
        .populate({path:"teacher_id"})
        .populate({path:"test_id"})
        .lean().exec();
        res.status(201).send({student});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})





module.exports = router;