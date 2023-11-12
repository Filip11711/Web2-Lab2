const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();
const path = require('path');

const homeRouter = require('./routes/home.routes');
const xssRouter = require('./routes/xss.routes');
const sdeRouter = require('./routes/sde.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/XSS', xssRouter);
app.use('/SensitiveDataExposure', sdeRouter);

app.listen(process.env.PORT);