const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const db = require("./db");
const routes = require("./routes");
async function main() {
  await db.connect();

  const app = express();
  app.use(express.json());
  routes(app);

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}
main();
