import express from "express";
import { InsertTeachersController, TeacherDeleteController, SelectTeacherController, SelectTeacherController2 } from "../Controller/TeachersController.js";

const TeachersRouter = express.Router();

TeachersRouter.post("/AddTeachers", InsertTeachersController);
TeachersRouter.post("/SelectTeachers", SelectTeacherController);
TeachersRouter.post("/SelectTeachers2", SelectTeacherController2);
TeachersRouter.post("/DeleteTeachers", TeacherDeleteController);

export default TeachersRouter;