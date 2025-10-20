import connection from "../Config/DB.js";

export const CreateStudentTable = async () => {
    const StudentTable = `CREATE TABLE IF NOT EXISTS StudentTable(
        StudentId varchar(100) PRIMARY KEY,
        FullName varchar(200) UNIQUE,
        Gender varchar(10),
        DepartmentId int,
        ClassYear int,
        Semister int,
        DormNo int,
        Password varchar(255),
        FOREIGN KEY (DepartmentId) REFERENCES DepartmentTable(Did),
        FOREIGN KEY (ClassYear, Semister) REFERENCES AcademicPeriodTable(ClassYear, Semister)
    )`;

    try {
        await connection.query(StudentTable);
        return { success: true, message: 'StudentTable created successfully' };
    } catch (err) {
        console.error('Error creating StudentTable:', err);
        throw err;
    }
};


export const InsertToStudent = async (StudentId, FullName, Gender, DepartmentId, ClassYear,Semister, DormNo, Password) => {
    const InsertStudent = `INSERT INTO StudentTable(StudentId, FullName, Gender, DepartmentId, ClassYear,Semister, DormNo, Password)
    values (?,?,?,?,?,?,?,?)`

    try{
        const result =  await connection.execute(InsertStudent, ["UGR/"+StudentId+"/16", FullName, Gender, DepartmentId, ClassYear,Semister, DormNo, Password])
        return result;
    }catch(err){
        throw err;
    }  
}

export const SelectStudent = async (StudentId, Password) => {
    const selectFromStudent = `SELECT * FROM StudentTable s WHERE s.StudentId = ? AND s.Password = ?`;

    try {
        const [rows] = await connection.execute(selectFromStudent, [ StudentId, Password]);
        return rows; 
    } catch (err) {
        throw err;
    }
};


export const SelectStudent2 = async (StudentId) => {
    const selectFromStudent = `SELECT * FROM StudentTable s WHERE s.StudentId = ? `;

    try {
        const [rows] = await connection.execute(selectFromStudent, [ StudentId ]);
        return rows; 
    } catch (err) {
        throw err;
    }
};


export const DeleteFromStudent = async (StudentId) => {

    const DeleteStudent = `DELETE FROM StudentTable WHERE StudentId = ?`

    try{
        const result = await connection.execute(DeleteStudent , [StudentId])
        return result;
    }catch(err){
        throw err;
    }
}
