const express = require('express');
const { path } = require('express/lib/application');
const res = require('express/lib/response');
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend'));
app.listen(PORT, () => console.log(`Listening on PORT: 3000`));

// GET Route for homepage
/*app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);*/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/notes.html"))
});

//add catch-all star
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"))
});