import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// Checks if an instance of the PrismaClient already exists, creates one if not.
if (!global.__db) {
  global.__db = new PrismaClient();
}

db = global.__db;

export { db };
