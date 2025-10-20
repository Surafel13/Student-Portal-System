import expressAsyncHandler from "express-async-handler";
import { DeleteFromTeachers, InsertToTeacher, SelectTeachers, SelectTeachers2 } from "../model/TeachersModel.js";

export const InsertTeachersController = expressAsyncHandler(async (req, res) => {
    try {
        const { TeacherId, FullName, Gender, DepartmentId, Password } = req.body;
        const result = await InsertToTeacher(TeacherId, FullName, Gender, DepartmentId, Password);
        console.log("Data inserted Successfully.")
        res.json({ message: "Data inserted Successfully." })
    } catch (err) {
        console.log(err);
        res.json({ message: "Unable to insert Data." })
    }
})

export const SelectTeacherController = expressAsyncHandler(async (req, res) => {
    const { TeacherId, Password } = req.body;

    try {
        const result = await SelectTeachers(TeacherId, Password);

        if (result.length === 0) {
            return res.status(404).json({ message: "Teacher not found." });
        }

        console.table(result);
        res.json(result[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the Teacher." });
    }
});


export const SelectTeacherController2 = expressAsyncHandler(async (req, res) => {
    const { TeacherId } = req.body;

    try {
        const result = await SelectTeachers2(TeacherId);

        if (result.length === 0) {
            return res.status(404).json({ message: "Teacher not found." });
        }

        console.table(result);
        res.json(result[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the Teacher." });
    }
});


export const TeacherDeleteController = expressAsyncHandler(async (req, res) => {
    const { TeacherId } = req.body;

    try {
        const result = await DeleteFromTeachers(TeacherId);
        console.log(result)
        if (result.affectedRows == 0) {
            return res.json({ message: "Teacher Not Found" })
        }

        console.log('Teacher information deleted');
        res.status(200).json({ message: "Teacher information deleted." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to delete the Teacher informaion" });
    }
})
