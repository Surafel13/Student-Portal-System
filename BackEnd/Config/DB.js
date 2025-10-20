import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); 

let connection;

const connectDB = async () => {
  try {
    connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("✅ Connected to MySQL database");
  } catch (err) {
    console.error("❌ Failed to connect:", err.message);
  }
};

await connectDB();
export default connection;
