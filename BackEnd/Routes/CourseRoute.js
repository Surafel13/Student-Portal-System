import express from 'express'
import { CourseInsertController, CourseDeleteController } from '../Controller/CourseController.js';

const CourseRouter = express.Router();
CourseRouter.post("/InsertCourse", CourseInsertController);
CourseRouter.post("/DeleteCourse", CourseDeleteController);

export default CourseRouter;