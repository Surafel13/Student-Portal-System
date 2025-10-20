import connection from "../Config/DB.js";

export const Sum = (num1, num2) => {
    return parseFloat(num1) + parseFloat(num2);
}

const gradePoints = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.75,
  'B+': 3.5,
  'B': 3.0,
  'B-': 2.75,
  'C+': 2.5,
  'C': 2.0,
  'C-': 1.7,
  'D': 1.0,
  'F': 0.0
};


export const GradeCalculator = async (studentId, connection) => {
    try {
        const gradePoints = {
            'A+': 4.0,
            'A': 4.0,
            'A-': 3.75,
            'B+': 3.5,
            'B': 3.0,
            'B-': 2.75,
            'C+': 2.5,
            'C': 2.0,
            'C-': 1.7,
            'D': 1.0,
            'F': 0.0
        };

        const query = `
            SELECT e.Grade, c.CreaditHour
            FROM EnrollmentTable e
            JOIN CourseTable c ON e.CourseId = c.CId
            WHERE e.StudentId = ?
        `;
        
        const [rows] = await connection.query(query, [studentId]);

        if (rows.length === 0) {
            return {
                success: false,
                message: `No enrollment records found for student ID: ${studentId}`,
                gpa: null
            };
        }

        // Calculate weighted GPA
        let totalWeightedPoints = 0;
        let totalCreditHours = 0;

        for (const row of rows) {
            if (row.Grade && gradePoints[row.Grade] && row.CreaditHour) {
                totalWeightedPoints += gradePoints[row.Grade] * row.CreaditHour;
                totalCreditHours += row.CreaditHour;
            }
        }

        if (totalCreditHours === 0) {
            return {
                success: false,
                message: `No valid grades or credit hours found for student ID: ${studentId}`,
                gpa: null
            };
        }

        const gpa = (totalWeightedPoints / totalCreditHours).toFixed(2);

        return {
            success: true,
            message: `GPA calculated successfully for student ID: ${studentId}`,
            gpa: parseFloat(gpa)
        };

    } catch (error) {
        console.error('Error calculating GPA:', error);
        return {
            success: false,
            message: 'An error occurred while calculating GPA',
            gpa: null,
            error: error.message
        };
    }
};






export const assignGrade = (total) => {
    if(total >= 90) return "A+";
    if(total >= 85) return "A";
    if(total >= 80) return "A-";
    if(total >= 75) return "B+";
    if(total >= 70) return "B";
    if(total >= 65) return "B-";
    if(total >= 60) return "C+";
    if(total >= 55) return "C";
    if(total >= 50) return "C-";
    if(total >= 40) return "D";
    if(total < 40) return "F";
}