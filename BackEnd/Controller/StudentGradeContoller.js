import { SelectStudentGrade } from "../model/StudentGradeModel.js";
import expressAsyncHandler from "express-async-handler";

export const SelectStudentGradeController = expressAsyncHandler(async (req, res) => {
    const {  StudentId } = req.body;

    try {
        const result = await SelectStudentGrade(StudentId);

        if (result.length === 0) {
            return res.status(404).json({ message: "Student Grade not found." });
        }

        console.table(result);
        res.json(result); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the student." });
    }
});
