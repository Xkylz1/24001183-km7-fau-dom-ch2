// console.log("Implement servermu disini yak 😝!");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/findcar", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/findcar.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
