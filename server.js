const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('frontend'));

// console.log(apiRoutes);
app.use(htmlRoutes);

app.use(apiRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: 3000`));



