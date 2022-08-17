const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

app.use(cors());

app.use(express.json({ strict: false }));
// app.use(morgan("tiny"));

const port = 6001;
const discussionsRouter = require("./router/discussions");

app.use("/blogs", discussionsRouter);

app.get("/", (req, res) => {
  res.status(200).send("OK!");
  // throw "";
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
