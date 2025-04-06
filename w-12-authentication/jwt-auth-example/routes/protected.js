const express = require("express");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/", protect, (req, res) => {
    res.json({
        message: `Hello ${req.user.username}, this is a protected route!`,
    });
});

module.exports = router;
