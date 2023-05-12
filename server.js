const app = require("./app");
const dbConnection = require("./api/config/db.connection");
const port = process.env.PORT || 3000;

dbConnection.then(
  app.listen(port, () => {
    console.log(`server is listening on: http://localhost:${port}`);
  })
);
