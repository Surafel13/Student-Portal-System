import connection from "../Config/DB.js";
import { Sum, assignGrade } from "../Controller/GradeCalculator.js";
import { InsertGradeAfterEnrollment } from "./StudentGradeModel.js";


export const CreateEnrolmentTable = async () => {
    const EnrolmentTable = `CREATE TABLE IF NOT EXISTS EnrollmentTable(
        EId INT AUTO_INCREMENT PRIMARY KEY,
        StudentId VARCHAR(100),
        CourseId INT,
        ContinousMark INT,
        FinalExamMark INT,
        Total INT,
        Grade VARCHAR(10),
        FOREIGN KEY (StudentId) REFERENCES StudentTable(StudentId) ON DELETE CASCADE,
        FOREIGN KEY (CourseId) REFERENCES CourseTable(CId) ON DELETE CASCADE
    ) ENGINE=InnoDB`;

    try {
        await connection.query(EnrolmentTable);
        return { success: true, message: 'EnrollmentTable created successfully' };
    } catch (err) {
        console.error('Error creating EnrollmentTable:', err);
        throw err;
    }
};


export const SelectStudentEnrollment = async (StudentId) => {
    const selectFromStudent = `SELECT 
                            c.Cname,
                            c.CreaditHour,
                            e.ContinousMark,
                            e.FinalExamMark,
                            e.Grade
                            FROM CourseTable c 
                            join EnrollmentTable e on c.CId = e.CourseId
                            WHERE e.StudentId = ?`;

    try {
        const [rows] = await connection.execute(selectFromStudent, [ StudentId]);
        return rows; 
    } catch (err) {
        throw err;
    }
};


export const InsertToEnrollmetn = async (StudentId, CourseId, ContinousMark, FinalExamMark) => {
    const InsertMark = `INSERT INTO EnrollmentTable (StudentId, CourseId, ContinousMark, FinalExamMark, Total, Grade) VALUES (?, ?, ?, ?, ?, ?)`;
    const UpdateMark = `UPDATE EnrollmentTable SET ContinousMark = ?, FinalExamMark = ?, Total = ?, Grade = ? WHERE StudentId = ? AND CourseId = ?`;

    try {
        const [studentRows] = await connection.execute(
            `SELECT StudentId FROM StudentTable WHERE StudentId = ?`,
            [StudentId]
        );
        if (studentRows.length === 0) {
            throw new Error(`StudentId ${StudentId} does not exist in StudentTable`);
        }

        // Validate CourseId exists
        const [courseRows] = await connection.execute(
            `SELECT CId FROM CourseTable WHERE CId = ?`,
            [CourseId]
        );
        if (courseRows.length === 0) {
            throw new Error(`CourseId ${CourseId} does not exist in CourseTable`);
        }

        // Check if enrollment already exists
        const [existingRows] = await connection.execute(
            `SELECT StudentId, CourseId FROM EnrollmentTable WHERE StudentId = ? AND CourseId = ?`,
            [StudentId, CourseId]
        );

        const total = Sum(ContinousMark, FinalExamMark);
        const grade = assignGrade(total);
        let result1;

        if (existingRows.length > 0) {
            // Update existing enrollment
            [result1] = await connection.execute(UpdateMark, [
                ContinousMark,
                FinalExamMark,
                total,
                grade,
                StudentId,
                CourseId
            ]);
        } else {
            // Insert new enrollment
            [result1] = await connection.execute(InsertMark, [
                StudentId,
                CourseId,
                ContinousMark,
                FinalExamMark,
                total,
                grade
            ]);
        }

        await InsertGradeAfterEnrollment(StudentId, connection);

        return result1;
    } catch (err) {
        console.error('Error inserting enrollment:', err);
        throw err;
    }
};



export const DeleteFromEnrollment = (EId) => {

  const DeleteEnrollment = `DELETE FROM EnrollmentTable WHERE EId = ?`

  try {
    const result = connection.execute(DeleteEnrollment, [EId])
    return result;
  } catch (err) {
    throw err;
  }

}

