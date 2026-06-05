import Database from "better-sqlite3";
import path from "path";

// Ensure the db file is in the root directory
const dbPath = path.resolve(process.cwd(), "local.db");

declare global {
  // eslint-disable-next-line no-var
  var dbInstance: Database.Database | undefined;
}

function getDatabase(): Database.Database {
  if (process.env.NODE_ENV === "production") {
    return new Database(dbPath);
  }

  // Prevent multiple connections during hot-reloads in development
  if (!global.dbInstance) {
    global.dbInstance = new Database(dbPath);
    // Enable WAL mode for better performance
    global.dbInstance.pragma("journal_mode = WAL");
  }

  return global.dbInstance;
}

export const db = getDatabase();
