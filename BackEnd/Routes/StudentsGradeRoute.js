import express from 'express'
import { SelectStudentGradeController } from '../Controller/StudentGradeContoller.js'

const StudentGradeRouter = express.Router();
StudentGradeRouter.post("/SelectStudentGrade", SelectStudentGradeController);

export default StudentGradeRouter;

