const router = require('express').Router();
//const app = express();
const fs = require("fs");
//const path = require('path');


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", function(err, data){
        //console.log(data)
        const notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
    /*.then(function(data){
        console.log(data)
        notes = [].concat(json.parse(data))
        res.json(notes);
    })*/
});


router.post("/notes", (req, res) =>{
    const note = req.body;
    fs.readFile("../db/db.json", "utf8", function(err, data){
    //console.log(data)
        const notes = [].concat(JSON.parse(data));
        notes.push(note);
        return notes
    })
    fs.writeFile("../db/db.json", JSON.stringify(notes))
        res.json(note);
    })


module.exports = router

