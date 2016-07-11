/**
 * Created by pallali on 29/6/16.
 */

var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
};

var fs = require('fs');


var routes = require('./server/routes/index');
var schools = require('./server/routes/schools');
var classrooms = require('./server/routes/classrooms');
var activities = require('./server/routes/activities');


//var schooldata = 'server/data/schools.json';
//var classroomdata = 'server/data/classrooms.json';

var us = require('underscore');
var assert = require('assert');
var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.use('/', routes);
app.use('/api/schools', schools);
app.use('/api/classrooms', classrooms);
app.use('/api/activities', activities);


app.get('/index',function (req,res) {
    res.render('index')
});

/*
app.get('/api/schools', function (req,res) {

    var data = fs.readFileSync(schooldata, 'utf8');
    //console.log(data)

    res.send(data);
});

app.get('/api/classroom', function (req,res) {

    var data = fs.readFileSync(classroomdata, 'utf8');
    console.log(data);
    res.send(data);
});*/
