//biblioteka do przechowywania bledow http
var createError = require('http-errors');
//express
var express = require('express');
//import path do pobierania sciezek
var path = require('path');
//bedzie nas wspierala do parsowania cookisow ktory bedzie generowal server
var cookieParser = require('cookie-parser');
//sluzyy do zrzucania logow w trybie developerskim
var logger = require('morgan');
//importy naszego routingu
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//wywolujemy nasz server
var app = express();

// view engine setup
//katalog z naszymi widokami
app.set('views', path.join(__dirname, 'views'));
//silnik do naszego systemu szablonow pug
app.set('view engine', 'pug');

//app.use to wywolania expressu
//use uzywamy do przekazywania dalszych midlewersow, rozszerzen ktore bedziemy wykorzystywac w expresie
app.use(logger('dev'));
//przechwytywanie naszego body, body wysylamy jsona, json ktory bedzie w body bedzie parsowany na obiekt i mozemy odwolywac sie bezposrednio nizeli ciagle parsowac
app.use(express.json());
//parsowanie formularzy, bedziemy wysylac dane w formularzu postem na nasze requesty
//powoduje automatycznie sparsowanie i wykorzystywali za pomoca obiektu w naszym requescie
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//deklarujemy nasz katalog statyczny z asetami, np. pliki js ktore sa ladowane po stronie klienta
//bedziemy deklarowac to co bedzie publiczne po stronie uzytkownika
app.use(express.static(path.join(__dirname, 'public')));

//za kazdym razem otrzymamy główny plik po jedynie sleszu
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//dodatkowe info
//katalog views bedziemy deklarowali nasze szablony
//prawie kazdy route bedzie mial swoj szablon


module.exports = app;
