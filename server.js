let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let config = require('./.config');
let userCtrl = require('./userCtrl');

let app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));




app.post('/users', userCtrl.storeCurrent);

app.get('/users/:id', userCtrl.getProfileById);

app.get('/users', userCtrl.getFriends);

app.get('/users/current', userCtrl.getCurrentUser);

// app.put('/users/addFriend/:id', userCtrl.addFriend);











app.listen(3000);