import connection from "../Config/DB.js";

export const CreateAcademicPeriodTable = async () => {
    const AcademicPeriodTable = `CREATE TABLE IF NOT EXISTS AcademicPeriodTable(
        ClassYear int,
        Semister int,
        PRIMARY KEY (ClassYear, Semister)
    )`;

    try {
        await connection.query(AcademicPeriodTable);
        return { success: true, message: 'AcademicPeriodTable created successfully' };
    } catch (err) {
        console.error('Error creating AcademicPeriodTable:', err);
        throw err;
    }
};


export const InsertToAcademicPeriod = async (ClassYear, Semister) => {
    const InsertPeriod = `INSERT INTO AcademicPeriodTable (ClassYear, Semister) VALUES (?, ?)`;

    try {
        const [result] = await connection.execute(InsertPeriod, [ClassYear, Semister]);
        return result;
    } catch (err) {
        console.error('Error inserting academic period:', err);
        throw err;
    }
};