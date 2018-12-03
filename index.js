require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', require('./routes'));

app.listen(process.env.PORT, () => console.log('app started in port:', process.env.PORT) );