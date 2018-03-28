require('dotenv').config();
const moment = require('moment');
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const uuid = require('node-uuid');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const session = require("express-session");
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

//Configure AWS
AWS.config.update({region:'us-east-1', secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET, accessKeyId: process.env.AWS_ACCESS_KEY_ID});

//Init DB Connection
let dynamodb = new AWS.DynamoDB();

passport.use(new LocalStrategy((username, password, done) => {
     let query = {
            Key: {
                "username": {
                    S: username.toUpperCase()
                }
            },
            TableName: "Users"
        };

        dynamodb.getItem(query, (err, data) => {
            if (err) {
                return done(null, { message: 'Server Error Encountered' });
            } else {
                if(_.isEmpty(data)) {
                    return done(null, { message: 'Incorrect Username' });
                } else {

                    if(bcrypt.compareSync(password,  data.Item.password.S)) {
                        return done(null, {username: data.Item.username.S})
                    }
                    return done(null, { message: 'Incorrect Password'})
                }
            }
        });
    }
));

/**
 * Serializes user to the http Session
 */
passport.serializeUser((user, done) => {
    done(null, user);
});

/**
 * Deserializes user to the http session
 */
passport.deserializeUser((user, done) => {
    done(null, user);
});

const index = require('./routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "treepepperonicupjacketphonedogkingbreadcakelovetourbignoonsuperzoom" }));
app.use(passport.initialize());
app.use(passport.session());

//Allow CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

//Allow for the Preflight options request before the post request
app.options("/*", function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
});

/**
 * =================
 * HTTP(S) ROUTES
 * =================
 */
app.use('/', index);
app.post('/admin/login', passport.authenticate('local'), (req, res) => {
        res.json({success: true, user: req.user})
});

app.post('/contact/submit', (req, res) => {
    const id = uuid.v4();

    let query = {
        Item: {
            "messageID": {
                S: id
            },
            "title": {
                S: req.body.title
            },
            "message": {
                S: req.body.message
            },
            "email": {
                S: req.body.email
            },
            "timestamp": {
                S: moment().format("YYYY-DD-MM h:mm:ss")
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "Messages"
    };

    dynamodb.putItem(query, (err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });

    res.json({success: true, body: req.body})
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
