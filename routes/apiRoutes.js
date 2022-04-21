const express = require('express');
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('frontend'));
app.listen(PORT, () => console.log(`Listening on PORT: 3000`));


//GET API Request Route
/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get('/read', function(request, response) {
  readFile(request.query.url);
})
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.json(reviews);
});*/

app.get("/api/notes", (req, res) => {
    readFile("db/db.json", "utf8")
    .then(function(data){
        notes = [].concat(json.parse(data))
        res.json(notes);
    })
});


//POST API ROUTE
/*app.post('/api/reviews', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });

  app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }

});
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});
*/

app.post("/api/notes", (req, res) =>{
    const note = req.body;
    readFile("./db/db.json", "utf8")
    .then(function(data){
        const notes = [].concat(json.parse(data));
        notes.push(note);
        return notes
    }).then(function(notes){
        fs.writeFile("./db/db.json", json.stringify(notes))
        res.json(note);
    })
})