const express = require('express');
const path = require('path');
const pug = require('pug');
const routes = require('./routes/routes.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

const asyncRoute = route => (req, res, next = console.error) =>
    Promise.resolve(route(req, res)).catch(next);

app.get('/', asyncRoute(routes.entertainment));
app.get('/business', asyncRoute(routes.business));
app.get('/interesting', asyncRoute(routes.interesting));
app.get('/sports', asyncRoute(routes.sports));
app.get('/television', asyncRoute(routes.television));
app.get('/flights', asyncRoute(routes.flights));
app.get('/weather', asyncRoute(routes.weather));
app.get('/companies', asyncRoute(routes.companies));
app.get('/currency', asyncRoute(routes.currency));

app.listen(3000);