import connection from "../Config/DB.js";

export const createTeachersTable = async () => {
    const TeachersTable = `create table if not exists TeachersTable(
    TeacherId varchar(20) primary key,
    FullName varchar(200) unique,
    Gender varchar(10),
    DepartmentId int ,
    Password varchar(255),
    FOREIGN KEY (DepartmentId) REFERENCES DepartmentTable(Did)
)`;

    await connection.query(TeachersTable);
}


export const InsertToTeacher = (TeacherId, FullName, Gender, DepartmentId, Password) => {
    const InsertTeacher = `INSERT INTO TeachersTable(TeacherId, FullName, Gender, DepartmentId, Password)
    values (?,?,?,?,?)`

    try{
        const result = connection.execute(InsertTeacher, [TeacherId, FullName, Gender, DepartmentId, Password]);
        return result;
    }catch(err){
        throw err;
    }
        
}

export const SelectTeachers = async (TeacherId, Password) => {
    const selectFromTeachers = `SELECT * FROM TeachersTable t WHERE t.TeacherId = ? AND t.Password = ?`;

    try {
        const [rows] = await connection.execute(selectFromTeachers, [ TeacherId, Password]);
        return rows; 
    } catch (err) {
        throw err;
    }
};


export const SelectTeachers2 = async (TeacherId) => {
    const selectFromTeachers = `SELECT * FROM TeachersTable t WHERE t.TeacherId = ?`;

    try {
        const [rows] = await connection.execute(selectFromTeachers, [ TeacherId ]);
        return rows; 
    } catch (err) {
        throw err;
    }
};


export const DeleteFromTeachers = async (TeacherId) => {

    const DeleteTeacher = `DELETE FROM TeachersTable WHERE TeacherId = ?`

    try{
        const result = await connection.execute(DeleteTeacher , [TeacherId])
        return result;
    }catch(err){
        throw err;
    }
}





