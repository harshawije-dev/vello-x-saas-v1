import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  emailConfirmedAt: text("email_confirmed_at"),
  password: text("password").notNull(),
  createdOn: text("created_on")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedOn: text("updated_on")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
