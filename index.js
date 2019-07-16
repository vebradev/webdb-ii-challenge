const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    res.json("success");
  } catch (error) {
    next(new Error("argh!"));
  }
});

app.use((err, req, res, next) => {
  // eslint-disable-line
  console.error("ERROR:", err);
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
