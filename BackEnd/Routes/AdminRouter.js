import express from "express";
import { InsertAdminController, AdminDeleteController, SelectAdminController } from "../Controller/AdminController.js";
const AdminRouter = express.Router();

AdminRouter.post("/AddAdmin", InsertAdminController);
AdminRouter.post("/SelectAdmin", SelectAdminController);
AdminRouter.post("/DeleteAdmin", AdminDeleteController);

export default AdminRouter;