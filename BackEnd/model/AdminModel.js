import connection from "../Config/DB.js";

export const CreateAdminTable = async () => {
    const AdminTable = `create table if not exists AdminTable(
    AdminId varchar(100) primary key,
    FullName varchar(200) unique,
    Gender varchar(10),
    Password varchar(255)
)`;

    await connection.query(AdminTable);
}
export const InsertToAdmin = (AdminId, FullName, Gender, Password) => {

    const InsertAdmin = `INSERT INTO AdminTable(AdminId, FullName, Gender, Password)
    values (?,?,?,?)`
    try{
        const result = connection.execute(InsertAdmin, [AdminId, FullName, Gender, Password]);
        return result;
    }catch(err){
        throw err;
    }
}

export const SelectAdmin = async (AdminId, Password) => {
    const selectFromAdmin = `SELECT * FROM AdminTable a WHERE a.AdminId = ? AND a.Password = ?`;

    try {
        const [rows] = await connection.execute(selectFromAdmin, [ AdminId, Password]);
        return rows; 
    } catch (err) {
        throw err;
    }
};

export const DeleteFromAdmin = (AId) => {

    const DeleteAdmin = `DELETE FROM AdminTable WHERE AId = ?`

    try{
        const result = connection.execute(DeleteAdmin , [AId])
        return result;
    }catch(err){
        throw err;
    }
}

