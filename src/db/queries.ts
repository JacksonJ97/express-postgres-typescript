import pool from "./pool";

type Username = {
  id: number;
  username: string;
};

async function getAllUsernames() {
  const { rows } = await pool.query<Username>("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username: string) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export { getAllUsernames, insertUsername };
