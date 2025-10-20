import express from "express";
import connection from "./Config/DB.js";
import cors from "cors";

import { CreateStudentTable } from "./model/StudentsModel.js";
import { CreateDepartmentTable } from "./model/DepartmentModel.js";
import { CreateAdminTable } from "./model/AdminModel.js";
import { createTeachersTable } from "./model/TeachersModel.js";
import { CreateCourseTable } from "./model/CoursesModel.js";
import { CreateEnrolmentTable } from "./model/EnrolmentModel.js";
import { CreateStudentGradeTable } from "./model/StudentGradeModel.js";
import { CreateAcademicPeriodTable } from "./model/AcadamicPeiod.js";

import StudentRouter from "./Routes/StudentRoute.js";
import DepartmentRouter from "./Routes/DepartmentRoute.js";
import TeachersRouter from "./Routes/TeachersRouter.js";
import CourseRouter from "./Routes/CourseRoute.js";
import AdminRouter from "./Routes/AdminRouter.js";
import EnrollmentRouter from "./Routes/EnrollmentRoute.js";
import AcadamicPeiodRouter from "./Routes/AcadamicRoutePeriod.js";
import StudentGradeRouter from "./Routes/StudentsGradeRoute.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(4000, (err) => {
  if (err) return console.log("Something went wrong.");
  console.log("The server is run on http://localhost:4000");
});

await CreateDepartmentTable();
await CreateAcademicPeriodTable();
await CreateStudentTable();
await createTeachersTable();
await CreateCourseTable();
await CreateEnrolmentTable();
await CreateStudentGradeTable();
await CreateAdminTable();

app.use("/api/Students", StudentRouter);
app.use("/api/Department", DepartmentRouter);
app.use("/api/Teachers", TeachersRouter);
app.use("/api/Courses", CourseRouter);
app.use("/api/Admins", AdminRouter);
app.use("/api/Enrollment", EnrollmentRouter);
app.use("/api/AcadamicPeriod", AcadamicPeiodRouter);
app.use("/api/Grade", StudentGradeRouter);
