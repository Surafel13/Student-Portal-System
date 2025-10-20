import connection from "../Config/DB.js";

export const CreateDepartmentTable = async () => {
    const DepartmentTable = `create table IF NOT EXISTS DepartmentTable(
    Did int AUTO_INCREMENT primary key,
    DepartmentName varchar(200)
)`;

    await connection.query(DepartmentTable);
}

export const InsertToDepartment = async (DepartmentName) => {
    const InsertDepartment = `INSERT INTO DepartmentTable(DepartmentName)
    values (?)`

    try {
        const result = await connection.execute(InsertDepartment, [DepartmentName]);
        return result;
    } catch (err) {
        throw err;
    }
}


export const SelectDepartment = async (DepartmentID) => {
    const selectFromDepartment = `SELECT DepartmentName FROM DepartmentTable d WHERE d.Did = ? `;

    try {
        const [rows] = await connection.execute(selectFromDepartment, [ DepartmentID ]);
        return rows; 
    } catch (err) {
        throw err;
    }
};


export const DeleteFromDepartment = async (DepartmentID) =>{
    const DeleteDepartment = `DELETE FROM DepartmentTable WHERE Did = ?`

    try{
        const result = connection.execute(DeleteDepartment, [DepartmentID]);
        return result;
    }catch(err){
        throw err;
    }
}
