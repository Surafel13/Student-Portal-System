import express from 'express'
import { AcademicPeriodInsertController } from '../Controller/AcadamicPeriodController.js';

const AcadamicPeiodRouter = express.Router();
AcadamicPeiodRouter.post("/InsertAcadamicPeiod", AcademicPeriodInsertController);

export default AcadamicPeiodRouter;