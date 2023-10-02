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

  return Response.json(JSON.stringify({ scores: items }));
}

export async function POST(req: Request) {
  const body = decodeURIComponent(await req.text());
  //const body = decodeURIComponent(await req.text());
  let data;

  try {
    data = JSON.parse(atob(body));
  } catch (e) {
    console.log("not json");
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
