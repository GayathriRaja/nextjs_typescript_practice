
const sqlite3 = require("sqlite3").verbose();

const connect=async()=>{


// Connecting to or creating a new SQLite database file
const db =await new sqlite3.Database(
  "./addBookDB1.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// const a=await db.all("select * from books4",[], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row.name);
//   });
// });
// console.log(a);

await db.serialize(() => {

  db.run(`select * from books4`),
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("created books table");
  }
})
db.serialize(()=>{
})

// // Serialize method ensures that database queries are executed sequentially
// db.serialize(() => {
//   // Create the items table if it doesn't exist
//   db.run(
//     `CREATE TABLE IF NOT EXISTS items (
//         id INTEGER PRIMARY KEY,
//         name TEXT,
//         description TEXT,
//         img TEXT
//       )`,
//     (err) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log("Created items table.");

//       // Clear the existing data in the products table
//       db.run(`DELETE FROM items`, (err) => {
//         if (err) {
//           return console.error(err.message);
//         }
//         console.log("All rows deleted from items");

//         // Insert new data into the products table
//         const values1 = [
//           "Oshawott",
//           "Basic Pokemon. HP 60. Surprise Attack 20. Flip a coin. If heads, this attack does 10 more damage. Water Gun 30. Weakness: Lightning x2. Resistance: none. Retreat Cost: 1.",
//           "/collection/item1.png",
//         ];
//         const values2 = [
//           "Riolu",
//           "Basic Pokemon. HP 60. Quick Attack 10. Flip a coin. If heads, this attack does 10 more damage. Weakness: Fighting x2. Resistance: none. Retreat Cost: 1.",
//           "/collection/item2.png",
//         ];

//         const values3 = [
//           "Snivy",
//           "Basic Pokemon. HP 60. Slam 20. Weakness: Fire x2. Resistance: Water -20. Retreat Cost: 1.",
//           "/collection/item3.png",
//         ];

//         const values4 = [
//           "Zorua",
//           "Basic Pokemon. HP 60. Stampede 10. Ram 20. Weakness: Fighting x2, Resistance: Psychic -20. Retreat Cost: 1.",
//           "/collection/item4.png",
//         ];

//         const insertSql = `INSERT INTO items(name, description, img) VALUES(?, ?, ?)`;

//         db.run(insertSql, values1, function (err) {
//           if (err) {
//             return console.error(err.message);
//           }
//           const id = this.lastID; // get the id of the last inserted row
//           console.log(`Rows inserted, ID ${id}`);
//         });

//         db.run(insertSql, values2, function (err) {
//           if (err) {
//             return console.error(err.message);
//           }
//           const id = this.lastID; // get the id of the last inserted row
//           console.log(`Rows inserted, ID ${id}`);
//         });

//         db.run(insertSql, values3, function (err) {
//           if (err) {
//             return console.error(err.message);
//           }
//           const id = this.lastID; // get the id of the last inserted row
//           console.log(`Rows inserted, ID ${id}`);
//         });

//         db.run(insertSql, values4, function (err) {
//           if (err) {
//             return console.error(err.message);
//           }
//           const id = this.lastID; // get the id of the last inserted row
//           console.log(`Rows inserted, ID ${id}`);
//         });

//         db.get("select * from items",[],(err,row)=>{
//           console.log(row);
//         })

        

//         //   Close the database connection after all insertions are done
//         db.close((err) => {
//           if (err) {
//             return console.error(err.message);
//           }
//           console.log("Closed the database connection.");
//         });
//       });
//     }
//   );
// });


  // const createTableBooks = () => {


//  export const addBooksToTheTable = (data) => {
//   // const body = data.json()
//   const { name, description, author, releaseYear} = data;
//   const insertSql = `INSERT INTO books(name, description, author, releaseYear) VALUES(?, ?, ?, ?)`;

//   const values = [name, description, author, releaseYear]

//     db.run(insertSql, values,
//     (err) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log("Inserted into the books table.");
//     })
// }

// db.close();
 
}

connect()