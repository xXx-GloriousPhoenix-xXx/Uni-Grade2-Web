import pg from 'pg';
const { Client } = pg;

const client = new Client({
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    user: 'postgres.nkhjzfksrramivoesttn',
    port: 5432,
    password: 'MyHubHasAReallyStrongPassword',
    database: 'postgres',
    ssl: {
        rejectUnauthorized: false
    }
});
/**
 * Get quantity of records
 * @returns {number} quantity of records
*/
async function getQuantity() {
  await client.connect();
  const result = await client.query('SELECT COUNT(*) FROM "Items"');
  await client.end();
  return result.rows[0].count;
}

/**
 * Assigns quantity of records
 * @param {number} newQ 
 * @returns {bool} result of assigning
 */
async function setQuantity(newQ) {
  const currQ = getQuantity(supabase);
  if (newQ === null || currQ === null) {
    return false;
  }
  const diff = Math.abs(newQ - currQ);

  client.connect();
  if (newQ > currQ) {
    for (let i = 0; i < diff; i++) {
      client.query('INSERT INTO "Items" DEFAULT VALUES');
    }
  } else if (newQ < currQ) {
    client.query('DELETE FROM "Items" WHERE id > $1', [newQ])
  }
  client.end();
  return true;
}

/**
 * Gets record by id
 * @param {number} id 
 * @returns {string | null} content of record
 */
async function getItem(id) {
    const currQ = getQuantity(supabase);
    if (id === null || currQ === null || id > currQ) {
      return null;
    }
    client.connect();
    const result = await client.query('SELECT content FROM "Items" WHERE id = $1', [id]);
    client.end();
    return result.rows[0].content;
}

/**
 * Assigns content to item
 * @param {number} id 
 * @param {string} content 
 * @returns {bool} result of assigning
 */
async function setItem(id, content) {
    const currQ = getQuantity(supabase);
    if (id === null || currQ === null || id > currQ || content === null) {
      return false;
    }
    client.connect();
    client.query('UPDATE "Items" SET content = $1 WHERE id = $2', [content, id]);
    client.end();
    return true;
}