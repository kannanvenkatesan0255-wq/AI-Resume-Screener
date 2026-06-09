const express = require("express");

const router = express.Router();

const {
    uploadResume,
    getResult,
    getRankings
} = require("../controllers/resumeController");

router.post("/upload", uploadResume);

router.get("/result", getResult);

router.get("/rankings", getRankings);
module.exports = router;