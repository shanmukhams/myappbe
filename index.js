const winston = require('winston');
const express = require('express');
const app = express();

//require('./services/startup/logging')();
require('./services/startup/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

