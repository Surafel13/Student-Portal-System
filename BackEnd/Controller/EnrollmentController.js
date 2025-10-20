import expressAsyncHandler from "express-async-handler";
import { InsertToEnrollmetn, DeleteFromEnrollment, SelectStudentEnrollment } from "../model/EnrolmentModel.js";

export const EnrollmentInsertController = expressAsyncHandler(async (req, res) => {
    try {
        const {StudentId, CourseId,  ContinousMark, FinalExamMark} = req.body;
        const result = await InsertToEnrollmetn(StudentId, CourseId,  ContinousMark, FinalExamMark);
        console.log("Data inserted Successfully.")
        res.json({message : "Data inserted Successfully."})
    }catch(err){
        console.log(err);
        res.json({message : "Unable to insert Data."})
    }
})


export const SelectEnrollmentController = expressAsyncHandler(async (req, res) => {
    const {  StudentId } = req.body;

    try {
        const result = await SelectStudentEnrollment(StudentId);

        if (result.length === 0) {
            return res.status(404).json({ message: "Student Enrollment not found." });
        }

        console.table(result);
        res.json(result); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the student enrollment." });
    }
});




export const EnrollmentDeleteController = expressAsyncHandler(async (req, res) => {
    try{
        const { EnrollmentId } = req.body;
        const result = DeleteFromEnrollment(EnrollmentId);
        console.log("Enrollment information deleted.");
        res.status(200).json("Enrollment information deleted.");
    }catch(err){
        console.log(err);
        res.status(500).json("Unable to delete the Enrollment informaion");
    }
})




