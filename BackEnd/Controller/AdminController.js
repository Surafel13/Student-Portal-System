import expressAsyncHandler from "express-async-handler";
import { InsertToAdmin, DeleteFromAdmin, SelectAdmin } from "../model/AdminModel.js";

export const InsertAdminController = expressAsyncHandler(async (req, res) => {
    try {
        const { AdminId, FullName, Gender, Password } = req.body;
        const result = await InsertToAdmin(AdminId, FullName, Gender, Password);
        console.log("Data inserted Successfully.")
        res.json({ message: "Data inserted Successfully." })
    } catch (err) {
        console.log(err);
        res.json({ message: "Unable to insert Data." })
    }
})


export const SelectAdminController = expressAsyncHandler(async (req, res) => {
    const {  AdminId, Password } = req.body;

    try {
        const result = await SelectAdmin(AdminId, Password);

        if (result.length === 0) {
            return res.status(404).json({ message: "Admin not found." });
        }

        console.table(result);
        res.json(result[0]); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the Admin." });
    }
});


export const AdminDeleteController = expressAsyncHandler(async (req, res) => {
    try {
        const { AId } = req.body;
        const result = DeleteFromAdmin(AId);
        console.log("Admin information deleted.");
        res.status(200).json("Admin information deleted.");
    } catch (err) {
        console.log(err);
        res.status(500).json("Unable to delete the Admin informaion");
    }
})
