const express = require('express');
const app = express();
const fs = require("fs");
//const path = require('path');


app.get("../api/notes", (req, res) => {
    readFile("../db/db.json", "utf8")
    .then(function(data){
        notes = [].concat(json.parse(data))
        res.json(notes);
    })
});


app.post("../api/notes", (req, res) =>{
    const note = req.body;
    readFile("../db/db.json", "utf8")
    .then(function(data){
        const notes = [].concat(json.parse(data));
        notes.push(note);
        return notes
    }).then(function(notes){
        fs.writeFile("../db/db.json", json.stringify(notes))
        res.json(note);
    })
})

module.exports = app

