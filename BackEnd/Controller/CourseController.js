import expressAsyncHandler from "express-async-handler";
import { InsertToCourse, DeleteFromCourse } from "../model/CoursesModel.js";


export const CourseInsertController = expressAsyncHandler(async (req, res) => {
    try {
        const {Cname, CreaditHour} = req.body;
        const result = await InsertToCourse(Cname, CreaditHour);
        console.log("Data inserted Successfully.")
        res.json({message : "Data inserted Successfully."})
    }catch(err){
        console.log(err);
        res.json({message : "Unable to insert Data."})
    }
})

export const CourseDeleteController = expressAsyncHandler(async (req, res) => {
    try{
        const { CourseId } = req.body;
        const result = DeleteFromCourse(CourseId);
        console.log("Course information deleted.");
        res.status(200).json("Course information deleted.");
    }catch(err){
        console.log(err);
        res.status(500).json("Unable to delete the Course informaion");
    }
})




