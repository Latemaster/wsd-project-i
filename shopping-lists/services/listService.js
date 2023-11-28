import { sql } from "../database/database.js";

const createList = async (name) => {
  await sql`INSERT INTO shopping_lists (name) VALUES (${name})`;
};

const findListCount = async () => {
  const count = await sql`SELECT COUNT(*)::integer FROM shopping_lists`
    return count[0].count;
}

const findCurrentList = async (ListId) => {
  const rows = await sql`SELECT * FROM shopping_lists
    WHERE id = ${ ListId }`;

  if (rows && rows.length > 0) {
    return rows[0];
  }

  return false;
};


const findAllActiveLists = async () => {
  return await sql`SELECT * FROM shopping_lists WHERE active = true`;
};

const deactivateList = async (ListId) => {
  await sql`UPDATE shopping_lists SET active = false WHERE id = ${ListId}`;
}

export { createList, findCurrentList, findAllActiveLists, deactivateList, findListCount };