const express = require("express");
const app = express();
const port = 3000;

// Middleware to log request details
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

// Global Middleware to parse JSON bodies in requests
app.use(express.json());

// Apply request logger middleware globally
app.use(requestLogger);

// Public route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the simple Node.js app!" });
});

// Error handling middleware (after all routes)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
