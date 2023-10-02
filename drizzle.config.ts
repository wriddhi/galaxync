import dotenv from "dotenv";
import type { Config } from "drizzle-kit";
dotenv.config({path: ".env"});

const config: Config = {
  out: "./drizzle/*",
  schema: "./drizzle/schema.ts",
  driver: "mysql2",
  verbose: true,
  strict: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? "",
  },
};

export default config;
