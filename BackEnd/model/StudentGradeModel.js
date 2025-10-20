import connection from "../Config/DB.js";
import { GradeCalculator } from "../Controller/GradeCalculator.js";


export const CreateStudentGradeTable = async () => {
    const StudentGradeTable = `CREATE TABLE IF NOT EXISTS StudentGradeTable(
        StudentId varchar(100),
        ClassYear int,
        Semister int,
        Gpa float,
        Cgpa float,
        PRIMARY KEY (StudentId, ClassYear, Semister),
        FOREIGN KEY (StudentId) REFERENCES StudentTable(StudentId) ON DELETE CASCADE,
        FOREIGN KEY (ClassYear, Semister) REFERENCES AcademicPeriodTable(ClassYear, Semister) ON DELETE CASCADE
    )`;

    try {
        await connection.query(StudentGradeTable);
        return { success: true, message: 'StudentGradeTable created successfully' };
    } catch (err) {
        console.error('Error creating StudentGradeTable:', err);
        throw err;
    }
};


export const InsertGradeAfterEnrollment = async (studentId, connection) => {
    try {
        
        const selectStudentQuery = `SELECT ClassYear, Semister FROM StudentTable WHERE StudentId = ?`;
        const [studentRows] = await connection.execute(selectStudentQuery, [studentId]);

        if (studentRows.length === 0) {
            throw new Error(`No student found with ID: ${studentId}`);
        }

        const { ClassYear, Semister } = studentRows[0];

        const gpaResult = await GradeCalculator(studentId, connection);
        
        if (!gpaResult.success) {
            throw new Error(gpaResult.message);
        }

        const gpa = Number(gpaResult.gpa.toFixed(4));

        const selectPreviousGpasQuery = `SELECT Gpa FROM StudentGradeTable WHERE StudentId = ?`;
        const [previousGpaRows] = await connection.execute(selectPreviousGpasQuery, [studentId]);

        let cgpa = 0.0;
        if (previousGpaRows.length > 0) {
            const allGpas = [...previousGpaRows.map(row => row.Gpa), gpa];
            const totalGpa = allGpas.reduce((sum, currentGpa) => sum + currentGpa, 0);
            cgpa = Number((totalGpa / allGpas.length).toFixed(4));
        } else {
            cgpa = Number(gpa.toFixed(4));
        }

        const insertQuery = `INSERT INTO StudentGradeTable (StudentId, ClassYear, Semister, Gpa, Cgpa)
                            VALUES (?, ?, ?, ?, ?)
                            ON DUPLICATE KEY UPDATE Gpa = ?, Cgpa = ?`;
        
        const result = await connection.execute(insertQuery, [
            studentId,
            ClassYear,
            Semister,
            gpa,
            cgpa,
            gpa,
            cgpa
        ]);

        return {
            success: true,
            message: `Successfully inserted/updated grade for student ID: ${studentId}`,
            result
        };
    } catch (err) {
        console.error('Error in InsertGradeAfterEnrollment:', err);
        throw err;
    }
};

export const SelectStudentGrade = async (StudentId) => {
    const selectFromStudent = `SELECT * FROM StudentGradeTable s WHERE s.StudentId = ?`;

    try {
        const [rows] = await connection.execute(selectFromStudent, [ StudentId ]);
        return rows; 
    } catch (err) {
        throw err;
    }
};