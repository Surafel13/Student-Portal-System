import express from 'express'
import { StudentInsertController , StudentDeleteController, SelectStudentController, SelectStudentController2} from '../Controller/StudentController.js';

const StudentRouter = express.Router();
StudentRouter.post("/InsertStudent", StudentInsertController);
StudentRouter.post("/DeleteStudent", StudentDeleteController);
StudentRouter.post("/SlelectStudent", SelectStudentController);
StudentRouter.post("/SlelectStudent2", SelectStudentController2);

export default StudentRouter;