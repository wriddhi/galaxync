import { publicProcedure, router } from "./trpc";
import { getToken } from "@/db";

import { z } from "zod";


export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),

  getTokens: publicProcedure.input(z.string().email()).query(async (opts) => {
    return await getToken(opts.input);
  }),
});

export type AppRouter = typeof appRouter;
