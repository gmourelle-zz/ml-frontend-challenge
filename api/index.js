const express = require("express");
const cors = require("cors");
const config = require("./config");

const getItems = require("./routes");

const app = express();
app.use(cors());

// Application routes.
app.use("/api/items", getItems);

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
});
