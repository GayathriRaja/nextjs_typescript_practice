import sqllite3 from "sqlite3";
import { open } from "sqlite";
const sqlite3 = require("sqlite3").verbose();

// let db = new sqlite3.Database(
//   "../../.././books1DB.db",
//   sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
//   (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log("Connected to the SQlite database.");
//   }
// );
let db = null
const databaseDirectory = __dirname + '../../../addBookDB1.db';


export async function GET() {
  if (!db) {
    db = await open({
      filename: databaseDirectory,
      driver: sqlite3.Database,
    });
  }

  const bookList = await db.all("select * from  books2");

  return new Response(JSON.stringify(bookList), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function POST(data: Object) {
  if (!db) {
    db = await open({
      filename: databaseDirectory,
      driver: sqlite3.Database,
    });
  }
  const { name, description, author, releaseYear } = data;
  const insertSql = `INSERT INTO books2(name, description, author, releaseYear) VALUES(?, ?, ?, ?)`;
  const values = ["abcd", "abcd", "abcd", "abcd"];

  await db.run(insertSql, values, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Inserted into the books table.");
  });
  return new Response("Successfully added book in table", {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
