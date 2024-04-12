const express = require("express");
const mongoose = require("./db"); // If using MongoDB
const routes = require("./routes"); // If routes are separated

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); // Serve static files from 'public' directory
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
