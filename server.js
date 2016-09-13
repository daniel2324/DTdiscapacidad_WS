//==============================================================================
// Include Express essentials.
//==============================================================================
var http 				= require('http');
var express 			= require('express');
var router 				= express.Router();
var app 				= express();
var path 				= require('path');

//==============================================================================
// Include depedencies.
//==============================================================================
var favicon 			= require('serve-favicon');
var methodOverride 		= require('method-override');
var bodyParser 			= require('body-parser');
var errorHandler 		= require('errorhandler');

//==============================================================================
// Set server environment properties.
//==============================================================================
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/client/views'));
app.use(favicon(__dirname + '/client/public/images/icon1.ico'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

//==============================================================================
// Insert
//==============================================================================
/*
app.post('/hello/:nombre/:apellido', function (req, res) {
	
	var nombre	   = req.params.nombre;
	var apellido   = req.params.apellido;
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'lenovo232427',
	  database : 'sakila'
	});

	connection.connect();

	connection.query('INSERT INTO `actor` (`first_name`, `last_name`) VALUES (?, ?)', [nombre, apellido] , function(err, rows, fields) {
	  if (err) throw err;

	});

	var resultado = connection.query('SELECT * FROM actor', function(err, rows, fields) {
	  if (err) throw err;
	  res.json(rows);
	});

	connection.end();
});
*/


//==============================================================================
// Update
//==============================================================================
/*
app.put('/hello/:nombreActual/:nombre/:apellido', function (req, res) {
	
	var nombreActual = req.params.nombreActual;
	var nombre	     = req.params.nombre;
	var apellido     = req.params.apellido;
	var mysql        = require('mysql');
	var connection   = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'lenovo232427',
	  database : 'sakila'
	});

	connection.connect();

	connection.query('Update `actor` SET first_name = ?, last_name = ? Where first_name = ?', [nombre, apellido, nombreActual] , function(err, rows, fields) {
	  if (err) throw err;

	});

	var resultado = connection.query('SELECT * FROM actor', function(err, rows, fields) {
	  if (err) throw err;
	  res.json(rows);
	});

	connection.end();
});
*/

//==============================================================================
// Select
//==============================================================================
app.get('/pregunta', function (req, res) {
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'lenovo232427',
	  database : 'dtdiscapacidad_db'
	});

	connection.connect();

	var resultado = connection.query('SELECT * FROM pregunta', function(err, rows, fields) {
	  if (err) throw err;
	  res.json(rows);
	  //console.log(rows);
	  //return res.json(resultado);
	});

	connection.end();
});



//==============================================================================
// Delete
//==============================================================================
/*
app.delete('/hello/:nombre/:apellido', function (req, res) {
	
	var nombre	   = req.params.nombre;
	var apellido   = req.params.apellido;
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'lenovo232427',
	  database : 'sakila'
	});

	connection.connect();

	connection.query('DELETE FROM actor WHERE first_name = ? AND last_name = ?', [nombre, apellido], function(err, rows, fields) {
	  if (err) console.log('se murio');
	});

	var resultado = connection.query('SELECT * FROM actor', function(err, rows, fields) {
	  if (err) throw err;
	  res.json(rows);
	});

	connection.end();
});
*/

//==============================================================================
// Server first display here.
//==============================================================================
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

//==============================================================================
// Error handling, must be placed after the routes.
//==============================================================================
if ('development' == app.get('env')) {
  app.use(errorHandler({dumpExceptions: true, showStack: true}));
}

if ('production' == app.get('env')) {
  app.use(errorHandler());
}

//==============================================================================
// Server listener starts here.
//==============================================================================
var server = http.createServer(app);
server.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});