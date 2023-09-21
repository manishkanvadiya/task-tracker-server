const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json"); // Path to your JSON data file
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3500;

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
server.listen(PORT, () => {
  console.log(`live on ${PORT}`);
});
