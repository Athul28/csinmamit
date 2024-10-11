import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { coremem } from "./core";

//How to use seed.ts
//referr docs instead of ts-node use vite-node
//npm install vite vite-node --save-dev     ->   run this script to install vite node

async function main() {
  try {
    for (const item of coremem) {
      const addData = await prisma.team.create({
        data: {
          email: item.email,
          name: item.name,
          branch: item.branch,
          role: item.position,
          linkedin: item.linkedin,
          github: item.github,
          imageLink: item.imageSrc,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
