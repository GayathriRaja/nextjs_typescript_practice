import {postUserDetail} from "../database";


export async function POST(req: Request) {
    const body = await req.json();
    const {firstame, lastname, email, password} = body;
    const query = `INSERT INTO users(firstame, lastname, email, password) values(?,?,?,?)`;
    const values = [firstame, lastname, email, password]

    let status, respBody;
    await postUserDetail(query, values).then(()=>{
        status = 200;
        respBody = {
            response: "Successfully added users"
        }
    }).catch((err) => {
        status = 400;
        respBody = err;
       });
      return Response.json(respBody, {
       status,
      });



}