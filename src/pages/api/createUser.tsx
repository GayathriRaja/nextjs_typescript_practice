// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main(data) {
//   // ... you will write your Prisma Client queries here
//   await prisma.users.create({ data: data })

// }

// main(data: Object)
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

// // "use server"
// // import { prisma } from "@/db";



// // export default async function createUser(data: Object) {

// //   console.log("data", data)

// //     await prisma.users
// //       .create({ data: data })
// //       .then((res) => console.log(res))
// //       .catch((err) => console.log("err", err));
// //   }