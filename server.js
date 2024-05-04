// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Example GET request
  server.get("/api/data", (req, res) => {
    // Your GET request logic here
    res.send("GET request received");
  });

  // Example POST request
  server.post("/api/data", (req, res) => {
    // Your POST request logic here
    res.send("POST request received");
  });

  // Example PUT request
  server.put("/api/data/:id", (req, res) => {
    // Your PUT request logic here
    const id = req.params.id;
    res.send(`PUT request received for id ${id}`);
  });

  // Example DELETE request
  server.delete("/api/data/:id", (req, res) => {
    // Your DELETE request logic here
    const id = req.params.id;
    res.send(`DELETE request received for id ${id}`);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Server listening on http://localhost:3000");
    console.log("> Ready on http://localhost:3000");
  });
});
