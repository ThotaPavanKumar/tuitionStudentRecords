
const express = require("express");
const app = express();

app.use(express.json());

const studentController = require("./src/controllers/student.controller");
const teacherController = require("./src/controllers/teacher.controller");
const testController = require("./src/controllers/test.controller");

app.use("/student",studentController);
app.use("/teacher",teacherController);
app.use("/test",testController);

module.exports = app;

