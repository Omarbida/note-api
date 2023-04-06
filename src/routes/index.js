const noteRoutes = require("./NoteRoutes");
const authRoute = require("./AuthRoutes");
module.exports = (app) => {
  app.get("/status", (req, res, next) => {
    res.send("OK");
  });
  noteRoutes(app);
  authRoute(app);
};
