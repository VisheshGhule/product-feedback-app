import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'database-2.cla2koaki4vx.us-west-2.rds.amazonaws.com',
  port: 3306,
  user: vishesh,
  password: visheshghule,
  database: database-2,
});
