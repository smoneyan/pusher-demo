const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const poll = require(path.join(__dirname, 'routes', 'poll.js'));

// Set public 
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded : false}));

app.use(cors());

app.use('/poll', poll);

const port = 3000;
app.listen(port, () => console.log(`App listening in port ${port}`));
