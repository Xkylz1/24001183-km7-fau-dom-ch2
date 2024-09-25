// console.log("Implement servermu disini yak 😝!");
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, "../public")));

// Handle requests to the root ("/") by sending index.html automatically
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
app.get("/findcar", (req, res) => {
  console.log("test");
  res.sendFile(path.join(__dirname, "../public/pages/findcar.html"));
});
// app.get("/findcar", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "pages", "findcar.html"));
// });
// Set up the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
