var express = require('express');
var router = express.Router();
var path = require('path');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var app = express();
var flash = require('connect-flash');
var session = require('express-session');
var sessionConfig = {
    secret: 'ilovescotchscotchyscotchscotch',

};
app.use(bodyParser({limit: "50mb"}));
app.use(session(sessionConfig));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname + '/public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(flash());

require('./controllers/user')(app);
router.use(function (req, res, next) {
    req.app = {};
    next();
});

// launch ======================================================================
app.listen(port);
console.log(__dirname);