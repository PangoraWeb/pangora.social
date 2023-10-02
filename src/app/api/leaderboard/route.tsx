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

  const response = Response.json(JSON.stringify({ scores: items }));
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}

export async function POST(req: Request) {
  const body = decodeURIComponent(await req.text());
  let data;

  try {
    data = JSON.parse(atob(body));
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
