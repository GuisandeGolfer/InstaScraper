import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ Instagram: [] }).write();

export default db;

// the code we need to have our JSON DB.
