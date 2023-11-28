import { sql } from "../database/database.js";

const createItem = async (name, id) => {
    await sql`INSERT INTO shopping_list_items (name, shopping_list_id) VALUES (${name}, ${id})`;
}

const findActiveItemsByID = async (Listid) => {
    return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${ Listid } AND collected = false`;
}

const findCollectedItemsByID = async (Listid) => {
    return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${ Listid } AND collected = true`;
}

const CollectItem = async (Listid) => {
  await sql`UPDATE shopping_list_items
    SET collected = true WHERE id = ${ Listid }`;
};

const findItemCount = async () => {
    const count = await sql`SELECT COUNT(*)::integer FROM shopping_list_items`
    return count[0].count;
}

export { createItem, findActiveItemsByID,findCollectedItemsByID ,CollectItem, findItemCount };