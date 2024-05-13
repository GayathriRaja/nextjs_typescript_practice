import path from "path";
import sqlite3  from "sqlite3";
// import { migrate } from "./migration";

const dbPath = path.join(process.cwd(), "userDetails.db")
export const db = new sqlite3.Database(
    dbPath,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err)=>{
        if(err) {
            console.log(err.message)
        }
        console.log("Connected to user details database")
    }
)


// export const postUserDetail1 =  async (query: String, values: String[])=> {
//     return await new Promise((resolve,reject)=>{
//         db.run(query, values, function(err) {
//             if(err){
//                 console.log(err)
//                 reject(err)
//             }
//             resolve(null);
//         })
//     })
// }


export const postUserDetail = async (query: string, values: string[]) => {
    migrate()
    return await new Promise((resolve, reject) => {
     db.run(query, values, function(err) {
      if (err) {
       console.log(err);
       reject(err);
      }
      resolve(null);
     });
    });
   };


   export const migrate = () => {
    db.serialize(()=>{
        db.run(
            `
            CREATE TABLE IF NOT EXISTS users(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstname TEXT not null,
                lastnme TEXT not null,
                email TEXT UNIQUE not null,
                password TEXT not null
            );
            `,
            (err: Error)=>{
                if(err){
                    console.error(err.message)
                }
                console.log("Users table created successfully");
            }
        )})
    }

    // migrate();
