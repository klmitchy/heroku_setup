//const express = require('express');
//const app = express();
const router = require('express').Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"))
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/notes.html"))
});

//add catch-all star
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"))
});

module.exports = router