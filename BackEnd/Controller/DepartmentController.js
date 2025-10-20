import { InsertToDepartment, DeleteFromDepartment, SelectDepartment } from "../model/DepartmentModel.js";
import expressAsyncHandler from "express-async-handler"

export const DepartmentInsertController = expressAsyncHandler(async (req, res) => {
    try {
        const { DepartmentName } = req.body;
        const result = await InsertToDepartment(DepartmentName);
        console.log("Data inserted.");
        res.json({ message: "Data inserted." })
    } catch (err) {
        console.log(err);
        res.json({ error: "Unable to enter the data." })
    }

})


export const SelectDepartmentController = expressAsyncHandler(async (req, res) => {
    const {  DepartmentID } = req.body;

    try {
        const result = await SelectDepartment(DepartmentID);

        if (result.length === 0) {
            return res.status(404).json({ message: "Department not found." });
        }

        console.table(result);
        res.json(result[0]); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the Department." });
    }
});


export const DepartmentDeleteController = expressAsyncHandler(async (req, res) => {
    try {
        const { DepartmentID } = req.body;
        const result = await DeleteFromDepartment(DepartmentID);
        console.log("Data Deleted.");
        res.json({ message: "Data Deleted." })
    } catch (err) {
        console.log(err);
        res.json({ error: "Unable to delete the data." })
    }

})
