import { InsertToStudent ,DeleteFromStudent, SelectStudent, SelectStudent2 } from "../model/StudentsModel.js";
import expressAsyncHandler from "express-async-handler";

export const StudentInsertController = expressAsyncHandler(async (req, res) => {
    try {
        const {StudentId, FullName, Gender, DepartmentId, ClassYear,Semister,  DormNo, Password} = req.body;
        const result = await InsertToStudent(StudentId, FullName, Gender, DepartmentId, ClassYear,Semister,  DormNo, Password);
        console.log("Data inserted Successfully.")
        res.json({message : "Data inserted Successfully."})
    }catch(err){
        console.log(err);
        res.json({message : "Unable to insert Data."})
    }
})



export const SelectStudentController = expressAsyncHandler(async (req, res) => {
    const {  StudentId, Password } = req.body;

    try {
        const result = await SelectStudent(StudentId, Password);

        if (result.length === 0) {
            return res.status(404).json({ message: "Student not found." });
        }

        console.table(result);
        res.json(result[0]); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the student." });
    }
});

export const SelectStudentController2 = expressAsyncHandler(async (req, res) => {
    const {  StudentId } = req.body;

    try {
        const result = await SelectStudent2(StudentId);

        if (result.length === 0) {
            return res.status(404).json({ message: "Student not found." });
        }

        console.table(result);
        res.json(result[0]); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to find the student." });
    }
});

export const StudentDeleteController = expressAsyncHandler(async (req, res) => {
    try{
        const { StudentId } = req.body;
        const result = await DeleteFromStudent(StudentId);
        if(result.affectedRows === 0)
            return res.json({ message : "Student Not Found."})
        res.status(200).json({message : "Student information deleted."});
    }catch(err){
        console.log(err);
        res.status(500).json({message : "Unable to delete the student informaion"});
    }
})




