// Imports the needed libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const urlRouter = require('./routes/url');

// Backend App Configuration
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Configuration
const mongoDBEndpoint = process.env.MONGODB_URI || 'mongodb://127.0.0.1/myURL';
mongoose.connect(mongoDBEndpoint, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to mongo db'));

// Backend-frontend Connection Configuration
app.use(cors());

// Routes Configuration
app.use('/api/url', urlRouter);

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("starting at" + port);
})