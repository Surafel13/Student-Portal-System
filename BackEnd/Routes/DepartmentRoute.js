import express from "express"
import { DepartmentInsertController, DepartmentDeleteController, SelectDepartmentController } from "../Controller/DepartmentController.js";

const DepartmentRouter = express.Router();

DepartmentRouter.post("/AddDepartment", DepartmentInsertController);
DepartmentRouter.post("/SelectDepartment", SelectDepartmentController);
DepartmentRouter.post("/DeleteDepartment", DepartmentDeleteController);

export default DepartmentRouter;