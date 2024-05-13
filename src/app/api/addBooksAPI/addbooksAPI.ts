// import sqllite3 from "sqlite3";
// import {open} from "sqlite"

// let db=null;

// export async function POST(data: Object){

//     if(!db){
//         db = await open({
//             filename:"../../../addBookDB.db",
//             driver: sqllite3.Database,
//         })
//     }

//     const bookList = await db.all("select * from  books");

//       return new Response(JSON.stringify(bookList), {
//         headers: { "Content-Type": "application/json" },
//         status: 200,
//       });
// }