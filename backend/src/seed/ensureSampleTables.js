import Table from "../models/Table.js";
import { tables } from "./sampleMenu.js";

// Adds the starter floor plan without changing tables that an admin has configured.
export async function ensureSampleTables() {
  let inserted = 0;

  for (const table of tables) {
    const result = await Table.updateOne(
      { number: table.number },
      { $setOnInsert: { ...table, status: "empty", isActive: true } },
      { upsert: true }
    );
    if (result.upsertedCount) inserted += 1;
  }

  return { inserted };
}
