import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});

const DB = drizzle(client);

export default DB;
