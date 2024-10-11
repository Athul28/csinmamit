import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const teamRouter = createTRPCRouter({
  getTeam: publicProcedure.query(() => {//use protectedProcedure if u need the user to be authenticated to access the data
    console.log(db.team.findMany(),"This is in server")
    return db.team.findMany();
  }),
});
