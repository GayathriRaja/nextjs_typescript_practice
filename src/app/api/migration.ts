import {db} from "./database"


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
