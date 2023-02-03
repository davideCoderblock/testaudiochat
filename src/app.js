var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../src/routes/index');
var usersRouter = require('../src/routes/users');

const app = express();


// Serve i file statici dalla cartella "public"
app.use(express.static('public'));

// Risposta alla richiesta di una pagina
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



app.get('/data', (req, res) => {
  const data = {
    message: 'Hello, World!'
  };
  res.json(data);
});

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });



module.exports = app;
