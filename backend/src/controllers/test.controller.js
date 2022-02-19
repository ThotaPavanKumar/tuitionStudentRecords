const express = require("express");
const router = express.Router();

const Test = require("../models/test.model");


router.post("/", async (req,res) => {
    try {

        const test = await Test.create(req.body);
        res.status(201).send({test});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})

router.get("/", async (req,res) => {
    try {

        const test = await Test.find().lean().exec();
        res.status(201).send({test});

    } catch (e) {
        res.status(500).json({status : "Failed", message : e.message});
    }
})





module.exports = router;