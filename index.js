const helmet = require("helmet");
const morgan = require("morgan")
const express = require('express');
const path = require('path');
const Routes = require('./routes/Routes');


app = express();

app.set('view engine', 'ejs');


app.use(morgan("dev"));
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


// Main Routes
app.use('/', Routes);

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});

app.listen(3000);