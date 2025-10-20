import expressAsyncHandler from 'express-async-handler';
import connection from '../Config/DB.js';
import { InsertToAcademicPeriod } from '../model/AcadamicPeiod.js';

export const AcademicPeriodInsertController = expressAsyncHandler(async (req, res) => {
    try {
        const { ClassYear, Semister } = req.body;
        if (!ClassYear || !Semister) {
            return res.status(400).json({ message: 'ClassYear and Semister are required' });
        }

        // 1️⃣ Insert the new academic period
        const result = await InsertToAcademicPeriod(ClassYear, Semister);

        // 2️⃣ Update all students (mimicking trigger behavior)
        const updateQuery = `
            UPDATE StudentTable
            SET ClassYear = ?, Semister = ?
        `;
        await connection.query(updateQuery, [ClassYear, Semister]);

        console.log('Academic period inserted and students updated successfully.');
        res.status(201).json({ message: 'Academic period inserted and students updated successfully.' });
    } catch (err) {
        console.error('Error in AcademicPeriodInsertController:', err);
        res.status(500).json({ message: 'Unable to insert academic period or update students.' });
    }
});
