const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./leaderboard.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS scores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        score INTEGER
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Created scores table.");
    }
  );
});
