import type { Config } from "drizzle-kit";

export default {
  schema: "./src/entities/schema.ts",
  out: "./src/entities/migration",
  driver: "turso",
  dbCredentials: {
    url: "file:./src/entities/local.db",
  },
} satisfies Config;
