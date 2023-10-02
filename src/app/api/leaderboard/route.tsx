import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database | null = null;

export async function GET() {
  if (!db) {
    db = await open({
      filename: "./leaderboard.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  const items = await db.all("SELECT * FROM scores");

  console.log(items);

  return Response.json(JSON.stringify(items));
}

export async function POST(req: Request) {
  let data;

  try {
    data = await req.json();
  } catch (e) {
    return new Response("invalid", {
      status: 500,
    });
  }

  if (!data.hasOwnProperty("score")) {
    return new Response("invalid", {
      status: 500,
    });
  }

  if (isNaN(data.score)) {
    return new Response("invalid", {
      status: 500,
    });
  }

  if (!db) {
    db = await open({
      filename: "./leaderboard.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  await db.run(
    "INSERT INTO scores(score) VALUES(?)",
    [data.score],
    (err: any) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted`);
    }
  );

  return new Response("added", {
    status: 201,
  });
}