const express = require('express');

const bodyParser = require('body-parser');

const cors = require("cors");

const app = express();

app.use(cors());

const cookieSession = require("cookie-session");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "healthcare-session",
        secret: "COOKIE_SECRET", // should use as secret environment variable
        httpOnly: true
    })
);

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// require('./seeders/DatabaseSeeder.js')

module.exports = app