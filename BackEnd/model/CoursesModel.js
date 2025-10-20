import connection from "../Config/DB.js";

export const CreateCourseTable = async () => {
    const CourseTable = `CREATE TABLE IF NOT EXISTS CourseTable(
    CId int AUTO_INCREMENT primary key,
    Cname varchar (255),
    CreaditHour int
    )`


    await connection.query(CourseTable);
}


export const InsertToCourse = (Cname, CreaditHour) => {
    const InsertCourse = `INSERT INTO CourseTable(Cname, CreaditHour)
    values (?,?)`

    try {
        const result = connection.execute(InsertCourse, [Cname, CreaditHour])
        return result;
    } catch (err) {
        throw err;
    }
}

export const DeleteFromCourse = (CourseId) => {
    const DeleteCourse = `DELETE FROM CourseTable WHERE CId = ?`

    try {
        const result = connection.execute(DeleteCourse, [CourseId])
        return result;
    } catch (err) {
        throw err;
    }

}
