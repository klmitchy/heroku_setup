const router = require('express').Router();
//const app = express();
const fs = require("fs");
//const path = require('path');
const notes = [];

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", function(err, data){
        //console.log(data)
        notes.push(JSON.parse(data))
        res.json(notes);
    })
   
});


router.post("/notes", (req, res) => {
    const note = req.body;
    notes.push(note);
    
    fs.writeFile("../db/db.json", JSON.stringify(notes))
    
    //     res.json(note);
    // // })
    // })
});
    

module.exports = router
