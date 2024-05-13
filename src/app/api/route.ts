import sqllite3 from "sqlite3";
import { open } from "sqlite";
const sqlite3 = require("sqlite3").verbose();

let db = null


export async function GET() {
  if (!db) {
    db = await open({
      filename: "./addBookDB1.db",
      driver: sqlite3.Database,
    });
  }

  const bookList = await db.all("select * from  books4");

  return new Response(JSON.stringify(bookList), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function POST(data) {
  data=await data.json()
  
  if (!db) {
    db = await open({
      filename: "./addBookDB1.db",
      driver: sqlite3.Database,
    });
  }
  const { name, description, author, releaseYear } = data;
  const insertSql = `INSERT INTO books4(name, description, author, releaseYear) VALUES(?, ?, ?, ?)`;
  const values = [data.name, data.description, data.author, data.releaseYear];

  console.log("values", values)

  console.log("data", data)

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
