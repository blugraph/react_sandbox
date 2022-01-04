const express = require("express");
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv-flow').config();
const AWS = require("aws-sdk");
const app = express();
var cors = require('cors');
var handlers = require('./handlers/handleVehicles');
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false,limit: '50mb' }));
app.use(cors());
//For BodyParser
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(bodyParser.json());
// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
    next();
});

app.use(session({secret: 'keyboard cat', resave: true,saveUninitialized: true})); // session secret
app.use('/', express.static(`${process.env.UPLOADPATH}`));
app.get('/', function (req, res) { res.send('Welcome to Anpr Lambda server');});

module.exports = app;