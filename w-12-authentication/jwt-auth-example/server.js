require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protected"));
app.use("/api/common", require("./routes/common"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
