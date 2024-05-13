// import { prisma } from "@/db";
import Link from "next/link";

export default function Home() {

  // const getData = prisma.users.findMany()

  // console.log("getData", getData)
  return (
    <>
      <Link href="/addbooks"> Fetch Data </Link>
    </>
  );
}
