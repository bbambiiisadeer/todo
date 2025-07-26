import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "backend/db/schema.js";
import postgres from "postgres";
import { connectionString } from "backend/db/utils.js";

export const dbConn = postgres(connectionString);

export const dbClient = drizzle(dbConn, { schema: schema, logger: true });
