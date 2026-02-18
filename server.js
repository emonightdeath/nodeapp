const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Example API route
app.get("/api/time", (req, res) => {
  res.json({
    time: new Date().toISOString()
  });
});

// Example POST route
app.post("/api/echo", (req, res) => {
  res.json({
    received: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

