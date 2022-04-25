const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/notes.html"))
});

//add catch-all star
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"))
});

module.exports = app