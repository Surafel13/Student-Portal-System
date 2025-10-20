import express from 'express'
import { EnrollmentInsertController, EnrollmentDeleteController , SelectEnrollmentController} from '../Controller/EnrollmentController.js';

const EnrollmentRouter = express.Router();
EnrollmentRouter.post("/InsertEnrollment", EnrollmentInsertController);
EnrollmentRouter.post("/SelectEnrollment", SelectEnrollmentController);
EnrollmentRouter.post("/DeleteEnrollment", EnrollmentDeleteController);

export default EnrollmentRouter;