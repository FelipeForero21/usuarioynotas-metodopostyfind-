const express = require('express');
const bodyParse = require('body-parser')

const conecctDatabase = require('./config/database');
const routes = require('./routes/index.js');

const app = express();
const port = 3000;

conecctDatabase();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use('/', routes);
app.listen(port, () => console.log(`Estoy en el puerto ${port}`));


