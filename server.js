let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let config = require('./.config');

let app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));


















app.listen(3000);