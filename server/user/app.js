const express = require('express');
const app = express();
const DataBaseconnect = require('./DBconnection');
const bodyParser = require('body-parser');
const api = require('./api');
// const path = require('path');
const cors = require('cors');

app.use(cors());
DataBaseconnect.createConnection();
const connect = DataBaseconnect.getConnection();
connect.on("error",DataBaseconnect.onError);
connect.on("open",DataBaseconnect.onSuccess);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api',api);

module.exports =app