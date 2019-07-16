const server = require("./server");
const port = process.env.PORT || 4000;

server.get("/", (req, res) => {
  res.send("Up & running!");
})

server.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
