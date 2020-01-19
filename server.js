const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

// Bodyparser Middleware
app.use(express.json());

//routes:
app.use("/api/buildings", require("./routes/api/buildings"));
app.use("/api/input", require("./routes/api/input"));

const port = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}

server.listen(port, () => console.log(`Server started on port ${port}`));
