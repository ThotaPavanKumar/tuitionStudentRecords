const express = require("express");
const router = express.Router();

const Teacher = require("../models/teacher.model");


router.post("/", async (req,res) => {
    try {

        const teacher = await Teacher.create(req.body);
        res.status(201).send({teacher});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {

        const teacher = await Teacher.find().lean().exec();
        res.status(201).send({teacher});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})





module.exports = router;